<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <SpaceContainer m="10"  h="[calc(100vh-5rem)]" :space="space" />
</template>
  
<script setup>
const store = useSpace()
const { businessId } = useRoute()?.params

// Fetching spaces
await store.fetch(businessId)
const space = store.getSelectedSpace

// const mySpace = new Space({
//     name: space.name,
//     business: {
//         name: space.business?.name
//     },
//     boards: space.units
// })
</script>
  