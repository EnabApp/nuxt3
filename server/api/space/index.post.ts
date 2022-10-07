
export default defineEventHandler(async (event) => {
  const { businessId } = await useBody(event);
  const fakeData = [
    {
      id: "store",
      name: "المتجر",
      business: {
        id: "enab",
        name: "عنب"
      },
      boards: [
        {
          id: "apps",
          name: "التطبيقات",
          units: {
            mobile: [
              { id: '1', colSpan: 2, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 1 },
            ],
            tablet: [
              { id: '1', colSpan: 2, rowSpan: 2 },
              { id: '1', colSpan: 2, rowSpan: 1, componentName: 'TestUnitData', componentData: 'This is data' },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 2, rowSpan: 1, componentName: 'TestUnitData', componentData: 'This is another data' },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 3, rowSpan: 1, componentName: 'TestUnitData', componentData: 'This is also another data' },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
            ],
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
        {
          id: "packages",
          name: "الحزم",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
        {
          id: "20",
          name: "التخفيضات",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
      ]
    },
    {
      id: "1",
      name: "الموارد البشرية",
      type: "BUSINESS",
      business: {
        id: "1",
        name: "مجموعة العبدالله"
      },
      boards: [
        {
          id: "1",
          name: "الموظفين",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
        {
          id: "2",
          name: "الرواتب",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
      ]
    },
    {
      id: "store2",
      name: "اسواق الموز",
      business: {
        id: "2",
        name: "موز"
      },
      boards: [
        {
          id: "apps",
          name: "التطبيقات",
          units: {
            mobile: [
              { id: '1', colSpan: 2, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 1 },
            ],
            tablet: [
              { id: '1', colSpan: 2, rowSpan: 2 },
              { id: '1', colSpan: 2, rowSpan: 1, componentName: 'TestUnitData', componentData: 'This is data' },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 2 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 2, rowSpan: 1, componentName: 'TestUnitData', componentData: 'This is another data' },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 3, rowSpan: 1, componentName: 'TestUnitData', componentData: 'This is also another data' },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
              { id: '1', colSpan: 1, rowSpan: 1 },
            ],
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
        {
          id: "packages",
          name: "الحزم",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
        {
          id: "20",
          name: "التخفيضات",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
      ]
    },
    {
      id: "1",
      name: "الموارد البشرية",
      type: "BUSINESS",
      business: {
        id: "1",
        name: "مجموعة العبدالله"
      },
      boards: [
        {
          id: "1",
          name: "الموظفين",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
        {
          id: "2",
          name: "الرواتب",
          units: {
            desktop: [
              { id: '1', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: 'tEwtwerwer' },
              { id: '2', colSpan: 3, rowSpan: 3 },
              { id: '3', colSpan: 2, rowSpan: 4, componentName: 'TestUnitData', componentData: '2' },
              { id: '4', colSpan: 3, rowSpan: 1 },
            ]
          }
        },
      ]
    }
    ]
  return {
    data: fakeData.filter((space) => space.business.id == businessId)
  }
})
