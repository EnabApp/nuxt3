import { acceptHMRUpdate, defineStore } from "pinia";

export const useStoreApps = defineStore("apps", {
    state: () => ({
        all: [

        ],
        focused: "",
    }),

    getters: {
        // isRunning: (state) => (app) => state.all.find(a => a.title === app.title).running,
        getAll: (state) => state.all.filter(app => !app.parentApp),
        getApp: (state) => (app) => state.all.find(a => a.title === app.title),
        getRunningApps: (state) => state.all.filter(a => a.running),
        // getLockedApps: (state) => state.all.filter(a => a.locked),
        getFocused: (state) => state.focused,
        getChildrenApps: (state) => (title) => state.all.filter(app => app.parentApp === title),
    },

    actions: {
        register(appObject) {
            this.all.push(appObject);
        },

        setFocus(title){
            this.focused = title;
        },

        closeWindow(){
            let app = this.getRunningApps.find((app) => app.title == this.focused)
            let children = this.getChildrenApps(app.title)
            children?.forEach(child => child.running = false)
            app.running = false
        },

        openWindow(app){
            this.focused = app.title
            app.running = true
            app.minimized = false
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreApps, import.meta.hot));
}