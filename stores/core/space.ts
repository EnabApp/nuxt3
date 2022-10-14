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
    selectedBoardIndex: 0
  }),

  getters: {
    getSpaces: (state) => state.spaces,
    getSpace: (state) => state.space,
    getSelectedSpace: (state) => state.spaces.find((space: SpaceType) => space.id == useRoute().params.spaceId)
  },

  actions: {
    async fetchSpaces(businessId: string) {
      const data = await useApi("get:spaces-business", businessId)
      this.spaces = data
    },

    async fetchSpace(spaceId: string) {
      this.space = {}
      const data = await useApi("get:space", spaceId)
      this.space = data
    },

    unSetSpace(){
      this.space = {}
      this.selectedBoardIndex = 0
    },

    setBoardIndex(index: number){
      this.selectedBoardIndex = index
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSpace, import.meta.hot));
}
