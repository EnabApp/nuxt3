
export default defineEventHandler((event) => {
  return {
    data: [
      {
        id: "1",
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
