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
    getBusinessesAsUnits: (state) => {
      const units: any = []
      state.businesses.map((business: BusinessType) => {
        units.push({
          id: business.id,
          colSpan: 1,
          rowSpan: 1,
          componentName: 'DefaultContainer',
          componentData: {...business, route: business.id},          
        })
      })
      return {
        desktop: units as UnitType[],
        tablet: units as UnitType[],
        mobile: units as UnitType[],
      } as ResposnivesType;
    }
  },

  actions: {
    async fetch(){
      const { data, error } : RespType = await $fetch('/api/business')
      if (error) console.log(error)
      this.businesses = data
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBusiness, import.meta.hot));
}
