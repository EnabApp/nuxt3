import { acceptHMRUpdate, defineStore } from "pinia";
import { useFetch } from "@vueuse/core";
import { BusinessType } from "~~/models/Business";
import { UnitType } from "~~/models/Unit";
import { ResposnivesType } from "~~/models/Board";
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
      const data = await useApi("get:space-business", "634417a8c6664cd8d17754a0");
      console.log(data)

      // const { data, error } = await useAsyncData('businesses',
      //   () => $fetch('/api/core/business')
      // ) as RespType
      // console.log(data)
      // const { data, error } = await useAsyncData('businesses',
      //   () => $fetch('/api/business')
      // ) as RespType
      // if (error.value) { console.log(error); return false}
      // console.log(data.value?.data)
      // this.businesses = data.value?.data
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBusiness, import.meta.hot));
}
