import { acceptHMRUpdate, defineStore } from "pinia";
import { RespType } from "~~/types/Response";

export const useBusiness = defineStore("businessStore", {
  state: () => ({
    businesses: [],
  }),

  getters: {
    getBusinesses: (state) => state.businesses,
  },

  actions: {
    async fetch(){
      // const { data, error } : RespType = await $fetch('/api/business')
      const { data, error } = await useAsyncData('businesses',
        () => $fetch('/api/business')
      ) as RespType
      if (error.value) { console.log(error); return false}
      console.log(data)
      console.log(error)
      this.businesses = data.value?.data
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBusiness, import.meta.hot));
}
