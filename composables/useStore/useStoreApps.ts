import { acceptHMRUpdate, defineStore } from "pinia";

export const useStoreApps = defineStore("apps", {
    state: () => ({
        all: [

        ],
        focused: "",
    }),

    getters: {
        // isRunning: (state) => (app) => state.all.find(a => a.title === app.title).running,
        getAll: (state) => state.all,
        getApp: (state) => (app) => state.all.find(a => a.title === app.title),
        getRunningApps: (state) => state.all.filter(a => a.running),
        // getLockedApps: (state) => state.all.filter(a => a.locked),
        getFocused: (state) => state.focused
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
            app.running = false
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreApps, import.meta.hot));
}