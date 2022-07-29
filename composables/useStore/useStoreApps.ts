import { acceptHMRUpdate, defineStore } from "pinia";
import App from "~/classes/App";
import Widget from "~/classes/Widget";

export const useStoreApps = defineStore("apps", {
    state: () => ({
        all: [

        ],
        focused: "",

        apps: [
            new App({
                id: 1,
                name: 'Supermarket',
                title: "سوبر ماركت",
                icon: "i-bxs-cart",
                maximized: true,
                solid: true,
                widgets: [
                    new Widget({ 
                        id: 1,
                        name: 'First',
                        title: 'للسوبر ماركت',
                    })
                ],
                subApps: [
                    new App({
                        id: 1,
                        name: 'Second',
                        title: "برنامج ثاني",
                        icon: "i-bxs-cart",
                        size: "min-w-2xl min-h-3xl",
                    })
                ]
            }),
            new App({
                id: 2,
                name: 'ServicesStore',
                title: "متجر الخدمات",
                icon: "i-fluent:store-microsoft-16-filled",
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximized: true,
                resizeable: false,
                utility: true,
            }),
            new App({
                id: 3,
                name: 'Calculator',  
                title: "الحاسبة",
                icon: "i-ic-baseline-calculate",
                size: "min-w-md min-h-xl",
                maximizable: false,
                resizeable: false,
                utility: true,
            }),
            new App({
                id: 4,
                name: 'Todo',
                title: "مهامي",
                icon: "i-ri-todo-fill",
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximizable: false,
                resizeable: false,
                utility: true,
            })
        ],
    }),

    getters: {
        getApps: state => state.apps,
        // isRunning: (state) => (app) => state.all.find(a => a.title === app.title).running,
        getApp: state => id => state.apps.find(app => app.id === id),
        getRunningApps: (state) => state.apps.filter(app => app.running),
        // getLockedApps: (state) => state.all.filter(a => a.locked),
        getFocused: (state) => state.focused,
        getChildrenApps: (state) => (title) => state.apps.filter(app => app.parentApp === title),
    },

    actions: {
        setFocus(title){
            this.focused = title;
        },

        closeWindow(){
            let app = this.getApp(this.focused)
            let children = this.getChildrenApps(app.title)
            children?.forEach(child => child.running = false)
            app.running = false
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreApps, import.meta.hot));
}