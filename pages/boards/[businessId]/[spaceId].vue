<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <NuxtLayout name="user">
        <SpaceContainer :space="mySpace" />
    </NuxtLayout>
</template>
  
<script setup>
const store = useSpace()
const { spaceId } = useRoute()?.params

// Fetching spaces
await store.fetchSpace(spaceId)

const mySpace = new Space({
    name: store.getSpace.name,
    business: {
        name: store.getSpace.business?.name
    },
    boards: store.getSpace.boards
})
</script>
  