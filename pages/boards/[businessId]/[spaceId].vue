<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <NuxtLayout name="user">
        <SpaceContainer v-if="store.getSpace" :space="mySpace" />
    </NuxtLayout>
</template>
  
<script setup>
definePageMeta({
  middleware: 'auth'
})

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

onUnmounted(() => {
    store.unSetSpace()
})
</script>
  