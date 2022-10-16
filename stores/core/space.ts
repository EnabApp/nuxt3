import { acceptHMRUpdate, defineStore } from "pinia";
import { useNuxtApp, useRoute } from "#imports";
import { RespType } from "../../types/Response";
import { SpaceType } from "~~/models/Space";
import { UnitType } from "~~/models/Unit";
import { ResposnivesType } from "~~/models/Board";

export const useSpace = defineStore("space", {
  state: () => ({
    spaces: [],
    space: null,
    selectedBoardIndex: 0,

    spaceCreation: {},
    createError: null,
  }),

  getters: {
    getSpaces: (state) => state.spaces,
    getSpace: (state) => state.space,
    getSelectedSpace: (state) => state.spaces.find((space: SpaceType) => space.id == useRoute().params.spaceId),
    getCreateError: (state) => state.createError,
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
    },

    async create() {
      if (!this.spaceCreation.name) {
        this.createError = "يرجى ملئ جميع الحقول"
        return false
      }

      const { params } = useRoute()

      if (!params.businessId) {
        this.createError = "يرجى تحديد العمل"
        return false
      }

      this.spaceCreation.business_id = params.businessId
      

      try {
        const data = await useApi("post:space", this.spaceCreation);
        this.fetchSpaces(params.businessId)
        this.spaceCreation = {}
        return true
      } catch (error) {
        this.createError = error
        return false
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSpace, import.meta.hot));
}
