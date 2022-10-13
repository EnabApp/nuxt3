import { acceptHMRUpdate, defineStore } from "pinia";

export const useStore = defineStore("store-store", {
  state: () => ({
    businesses: [],

    categories: [
        { name: 'الصفحة الرئيسية', route: '/store'},
        { name: 'المبيعات', route: '/store/sales'},
        { name: 'المشتريات', route: '/store/purchases'},
        { name: 'المخزون', route: '/store/stock'},
        { name: 'المنتجات', route: '/store/products'},
        { name: 'العملاء', route: '/store/customers'},
        { name: 'الموردين', route: '/store/suppliers'},
        { name: 'الموظفين', route: '/store/employees'},
        { name: 'المحاسبة', route: '/store/accounting'},
        { name: 'التقارير', route: '/store/reports'},
    ]
  }),

  getters: {
    getBusinesses: (state) => state.businesses,
    getCategories: (state) => state.categories,
  },

  actions: {
    
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
