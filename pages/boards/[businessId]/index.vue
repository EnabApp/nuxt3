<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <NuxtLayout name="user">
        <SpaceContainer :space="mySpace" />
    </NuxtLayout>
</template>
  
<script setup>
const store = useSpace()
const router = useRouter()
const { businessId } = useRoute()?.params

// Fetching spaces
await store.fetch(businessId)

// Has no spaces in this business
if (store.getSpaces?.length <= 0) router.push('/enab/store')

const mySpace = new Space({
    name: 'مساحاتي',
    business: {
        name: store.getSpaces[0] ? store.getSpaces[0].business.name : 'اسم العمل' 
    },
    boards: [{ units: store.getSpacesAsUnits }]
})
</script>
  