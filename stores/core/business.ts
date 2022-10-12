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
      const data = await useApi("get:business");
      console.log(data)
      this.businesses = data
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBusiness, import.meta.hot));
}
