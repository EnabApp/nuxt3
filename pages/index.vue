<!-- SHOW BUSINESSES -->

<template>
  <SpaceContainer :space="mySpace" />
</template>

<script setup>
const store = useBusiness()


// Fetching Businesses
await store.fetch()

const mySpace = new Space({
  name: 'أعمالي',
  boards: [ { units: store.getBusinessesAsUnits } ]
})
</script>
