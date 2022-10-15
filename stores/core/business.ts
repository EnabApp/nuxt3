import { acceptHMRUpdate, defineStore } from "pinia";
import { BusinessType } from "~~/models/Business";

export const useBusiness = defineStore("businessStore", {
  state: () => ({
    businesses: [],
    createError: null,
    business: { user_id: "634475cef4194633dd306c09" },
    businessCategories: []
  }),

  getters: {
    getBusinesses: (state) => state.businesses,
    getBusinessCategories: (state) => state.businessCategories,
    getCreateError: (state) => state.createError,
  },

  actions: {
    async fetch() {
      const data = await useApi("get:business");
      this.businesses = data
    },

    async fetchCategories() {
      if (this.businessCategories.length > 0) return;
      const data = await useApi("get:business-category");
      this.businessesCategories = data
    },

    async create() {
      console.log(this.business)
      if (!(this.business.name && this.business.category_id && this.business.description)) {
        this.createError = "يرجى ملئ جميع الحقول"
        return false
      }

      try {
        const data = await useApi("post:business", this.business);
        // this.businesses.push(data);
        this.fetch()
        return true
      } catch (error) {
        this.createError = error
        return false
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBusiness, import.meta.hot));
}
