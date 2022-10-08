<!-- SHOW BUSINESSES -->

<template>
  <NuxtLayout name="user">
    <SpaceContainer :space="mySpace" />
  </NuxtLayout>
</template>

<script setup>
const store = useBusiness()

// Fetching Businesses
await store.fetch()
// console.log(store.getBusinessesAsUnits)

const mySpace = new Space({
  business: {
    name: 'أعمالي'
  },
  boards: [ { units: store.getBusinessesAsUnits } ]
})
</script>
