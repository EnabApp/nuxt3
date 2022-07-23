import { acceptHMRUpdate, defineStore } from "pinia";

export const useStoreApps = defineStore("apps", {
    state: () => ({
        all: [

        ],
    }),

    getters: {
        // isRunning: (state) => (app) => state.all.find(a => a.title === app.title).running,
        getAll: (state) => state.all,
        getApp: (state) => (app) => state.all.find(a => a.title === app.title),
        getRunningApps: (state) => state.all.filter(a => a.running),
        // getLockedApps: (state) => state.all.filter(a => a.locked),
        
    },

    actions: {
        register(appObject) {
            this.all.push(appObject);
            console.log(this.all)
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreApps, import.meta.hot));
}