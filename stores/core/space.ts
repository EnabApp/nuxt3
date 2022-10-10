import { acceptHMRUpdate, defineStore } from "pinia";
import { useNuxtApp, useRoute } from "#imports";
import { RespType } from "../../types/Response";
import { SpaceType } from "~~/models/Space";
import { UnitType } from "~~/models/Unit";
import { ResposnivesType } from "~~/models/Board";

export const useSpace = defineStore("space", {
  state: () => ({
    spaces: [],
  }),

  getters: {
    getSpaces: (state) => state.spaces,
    getSpacesAsUnits: (state) => {
      const units: any = []
      state.spaces.map((space: SpaceType) => {
        units.push({
          id: space.id,
          colSpan: 1,
          rowSpan: 1,
          componentName: 'DefaultContainer',
          componentData: { ...space, route: `boards/${space.business?.id}/${space.id}` },
        })
      })
      return {
        desktop: units as UnitType[],
        tablet: units as UnitType[],
        mobile: units as UnitType[],
      } as ResposnivesType;
    },

    getSelectedSpace: (state) => state.spaces.find((space: SpaceType) => space.id == useRoute().params.spaceId)
  },

  actions: {
    async fetch(businessId: string) {
      const { data, error } = await useAsyncData('spaces',
        () => $fetch(`/api/space/${businessId}`)
      ) as RespType
      if (error.value) { console.log(error); return false }
      console.log(data)
      this.spaces = data.value?.data
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSpace, import.meta.hot));
}
