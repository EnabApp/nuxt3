<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <SpaceContainer :space="mySpace" />
</template>
  
<script setup>
const store = useSpace()
const { businessId } = useRoute()?.params

// Fetching spaces
await store.fetch(businessId)

const mySpace = new Space({
    name: 'مساحاتي',
    business: {
        name: store.getSpaces[0] ? store.getSpaces[0].business.name : 'اسم العمل' 
    },
    boards: [{ units: store.getSpacesAsUnits }]
})
</script>
  