import { acceptHMRUpdate, defineStore } from "pinia";
import App from "~/classes/App";
import Widget from "~/classes/Widget";

export const useStoreApps = defineStore("apps", {
    state: () => ({
        all: [

        ],
        focused: "",

        apps: [],
    }),

    getters: {
        getApps: state => state.apps,
        // isRunning: (state) => (app) => state.all.find(a => a.title === app.title).running,
        getApp: state => id => state.apps.find(app => app.id === id),
        getRunningApps: (state) => state.apps.filter(app => app.running),
        getOwned: (state) => state.apps.filter(app => app.owned),
        // getLockedApps: (state) => state.all.filter(a => a.locked),
        getFocused: (state) => state.focused,
        getChildrenApps: (state) => (title) => state.apps.filter(app => app.parentApp === title),
        anyRunningIsMaximized: (state) => state.apps.some(app => app.maximized && app.running && !app.minimized),
    },

    actions: {
        setFocus(title){
            this.focused = title;
        },
        
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreApps, import.meta.hot));
}