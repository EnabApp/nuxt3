<!-- SHOW BUSINESSES -->

<template>
  <SpaceContainer :space="mySpace" />
</template>

<script setup>
const store = useBusiness()


// Fetching Businesses
await store.fetch()
console.log(store.getBusinessesAsUnits)
const mySpace = new Space({
  business: {
    name: 'أعمالي'
  },
  boards: [ { units: store.getBusinessesAsUnits } ]
})
</script>
