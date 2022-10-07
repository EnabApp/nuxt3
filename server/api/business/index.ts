
export default defineEventHandler((event) => {
  return {
    data: [
      {
        id: "enab",
        name: "عنب",
        spaces: [
          {
            id: "store",
            name: "المتجر",
          }
        ]
      },
      {
        id: "2",
        name: "موز",
        spaces: [
          {
            id: "store2",
            name: "اسواق الموز",
          }
        ]
      },
    ]
  }
})
