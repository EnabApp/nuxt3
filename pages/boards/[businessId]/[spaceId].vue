<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <NuxtLayout name="user">
        <SpaceContainer v-if="store.getSpace?.boards?.length > 0" :space="mySpace" />
        <div v-else flex="~ col gap-2 grow" items="center" justify="center">
            <span text="4xl">لايوجد لوحات</span>
            <p text="xl">يمكنك اضافة لوحات من خلال المتجر</p>
            <UiButton :to="'/store'" mt="4" color="secondary" size="lg" icon="IconStore">
                الانتقال الى المتجر  
            </UiButton>
        </div>
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
  