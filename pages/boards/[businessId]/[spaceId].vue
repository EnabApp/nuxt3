<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <NuxtLayout name="user">
        <SpaceContainer :space="space" />
    </NuxtLayout>
</template>
  
<script setup>
const store = useSpace()
const { spaceId } = useRoute()?.params

// Fetching spaces
await store.fetchSpace(spaceId)
const space = store.getSpace
console.log(space)
// const mySpace = new Space({
//     name: space.name,
//     business: {
//         name: space.business?.name
//     },
//     boards: space.units
// })
</script>
  