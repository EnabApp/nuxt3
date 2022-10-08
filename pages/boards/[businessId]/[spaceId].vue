<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <NuxtLayout name="user">
        <SpaceContainer :space="space" />
    </NuxtLayout>
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
  