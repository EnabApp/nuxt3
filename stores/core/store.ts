import { acceptHMRUpdate, defineStore } from "pinia";

export const useStore = defineStore("store-store", {
  state: () => ({
    categories: [
      // CRM, Sales, Point of Sale, Rental
      { id: 1, name: "المبيعات" },

      // Accounting, Invoicing, Expenses, Payroll
      { id: 2, name: "المالية" },

      // Inventory, Warehouse, Purchasing, Manufacturing, Quality
      { id: 3, name: "المخازن" },

      // Employees, Recruitment, Time Off, Appraisals, Referrals
      { id: 4, name: "الموارد البشرية" },

      // Social Marketing, Email Marketing, SMS Marketing, Events, Marketing Automation, Surveys
      { id: 5, name: "التسويق" },

      // Project, Timesheet, Field Service, Helpdesk, Planning, Appointments
      { id: 6, name: "الخدمات" },
    ],

    packages: []
  }),

  getters: {
    getCategories: (state) => state.categories,
    getCategory: (state) => (id: string) => state.categories.find((category) => category.id === id),
  },

  actions: {
    async fetchPackages() {
      // const data = await useApi("get:pack", pack_id)
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
