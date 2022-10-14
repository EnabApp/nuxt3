import { acceptHMRUpdate, defineStore } from "pinia";

export const useStore = defineStore("store-store", {
  state: () => ({
    businesses: [],

    categories: [
      { id: '1', name: 'المبيعات' },
      { id: '2', name: 'التسويق' },
      { id: '3', name: 'الموارد البشرية' },
      { id: '4', name: 'المالية' },
      { id: '5', name: 'التقنية' },
      { id: '6', name: 'التصميم' },
      { id: '7', name: 'الإدارة' },
      { id: '8', name: 'العملاء' },
      { id: '9', name: 'المشاريع' },
      { id: '10', name: 'المنتجات' },
      { id: '11', name: 'المواد الخام' },
      { id: '12', name: 'الموظفين' },
      { id: '13', name: 'العملاء' },
      { id: '13', name: 'الموردين' },
      { id: '14', name: 'المشتريات' },
      { id: '15', name: 'الصرفيات' },
      { id: '16', name: 'الايرادات' },
      { id: '17', name: 'التصوير' },
      { id: '18', name: 'العقارات' },
      { id: '19', name: 'التقارير' },
      { id: '20', name: 'الخزينة' },
      { id: '21', name: 'المطاعم' },
      { id: '22', name: 'السياحة' },
      { id: '23', name: 'السيارات' },
      { id: '24', name: 'المنزل' },
      { id: '25', name: 'التعليم' },
      { id: '26', name: 'التجميل' },
      { id: '27', name: 'الصحة' },
      { id: '28', name: 'الموضة' },
      { id: '29', name: 'الموسيقى' },
      { id: '30', name: 'الفنون' },
      { id: '31', name: 'المستشفيات' },
      { id: '32', name: 'المقاهي' },
      { id: '33', name: 'المدارس' },
      { id: '34', name: 'السفر' },
      { id: '35', name: 'المواد البناء' },
      { id: '38', name: 'المواد الكهربائية' },
      { id: '39', name: 'المواد الغذائية' },
      { id: '40', name: 'المواد الكيميائية' },
      { id: '41', name: 'المواد النفطية' },
      { id: '42', name: 'المواد الصناعية' },
      { id: '43', name: 'المواد الزراعية' },
      { id: '44', name: 'المواد الحيوانية' },
      { id: '45', name: 'المواد البحرية' },
      { id: '46', name: 'المواد الألغام' },




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
