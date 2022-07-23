import { acceptHMRUpdate, defineStore } from "pinia";
import { AppFirst } from "~~/.nuxt/components";

export const useStoreBottomBar = defineStore("bottomBar", {
    state: () => ({
        apps: [],
    }),

    getters: {
        
    },

    actions: {
        
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreBottomBar, import.meta.hot));
}