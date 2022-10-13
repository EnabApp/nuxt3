import { acceptHMRUpdate, defineStore } from "pinia";

export const useStore = defineStore("store-store", {
  state: () => ({
    businesses: [],

    categories: [
        { id: '1', name: 'المبيعات' },
        { id: '2', name: 'المشتريات' },
        { id: '3', name: 'المخزون' },
        { id: '4', name: 'المنتجات' },
        { id: '5', name: 'العملاء' },
        { id: '6', name: 'الموردين' },
        { id: '7', name: 'الموظفين' },
        { id: '8', name: 'المحاسبة' },
        { id: '9', name: 'التقارير' },
    ]
  }),

  getters: {
    getBusinesses: (state) => state.businesses,
    getCategories: (state) => state.categories,
    getCategory: (state) => (id: string) => state.categories.find((category) => category.id === id),
  },

  actions: {
    
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
