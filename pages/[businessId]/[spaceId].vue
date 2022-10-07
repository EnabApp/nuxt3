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
        name: 'اسم العمل'
    },
    boards: [
        {
            name: 'البورد الأول', 
            units: store.getSpacesAsUnits
        },
        {
            name: 'البورد الثاني', 
            units: store.getSpacesAsUnits
        },
    ]
})
</script>
  