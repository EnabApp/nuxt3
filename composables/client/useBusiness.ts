import { acceptHMRUpdate, defineStore } from "pinia";
import { UnitType } from '../models/Unit'
import { BusinessType } from '../models/Business'
import { ResposnivesType } from '../models/Board'
import { useFetch } from "@vueuse/core";

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
          componentName: '',
          componentData: business,          
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
      console.log(await $fetch('/api/business'))
      return false
      // if (error) return error
      // else return data
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBusiness, import.meta.hot));
}
