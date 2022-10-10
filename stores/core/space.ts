import { acceptHMRUpdate, defineStore } from "pinia";
import { useNuxtApp, useRoute } from "#imports";
import { RespType } from "../../types/Response";
import { SpaceType } from "~~/models/Space";
import { UnitType } from "~~/models/Unit";
import { ResposnivesType } from "~~/models/Board";

export const useSpace = defineStore("space", {
  state: () => ({
    spaces: [],
    space: {},
  }),

  getters: {
    getSpaces: (state) => state.spaces,
    getSpace: (state) => state.space,
    getSelectedSpace: (state) => state.spaces.find((space: SpaceType) => space.id == useRoute().params.spaceId)
  },

  actions: {
    async fetchSpaces(businessId: string) {
      const { data, error } = await useAsyncData('spaces',
        () => $fetch(`/api/space/by-business/${businessId}`)
      ) as RespType
      if (error.value) { console.log(error); return false }
      this.spaces = data.value?.data
    },

    async fetchSpace(spaceId: string) {
      this.space = {}
      const { data, error } = await useAsyncData('spaces',
        () => $fetch(`/api/space/${spaceId}`)
      ) as RespType
      if (error.value) { console.log(error); return false }
      this.space = data.value?.data[0]
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSpace, import.meta.hot));
}
