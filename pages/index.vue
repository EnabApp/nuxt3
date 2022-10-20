<!-- SHOW BUSINESSES -->

<template>
  <NuxtLayout name="user">
    <div flex="~ col gap-8">

      <!-- Header -->
      <!-- <Header /> -->

      <!-- Title -->
      <h1 font="medium" text="3xl primaryOp dark:primary">الأعمال</h1>

      <!-- Actions -->
      <div flex="~" justify="between" font="medium" text="xl">
        <div flex="~  gap-8">
          <!-- Grid - List : Toggle -->
          <UiSwitch v-model="switcher" size="md" w="250px" :list="[
            { id: '1', value: 'قائمة', icon: 'IconBoards' },
            { id: '2', value: 'لوحة', icon: 'IconBoards' },
          ]" />
  
  
  
          <!-- Divider -->
          <div h="full" w="1px" bg="secondary dark:secondaryOp"></div>
  
          <!-- Filter -->
          <UiDropdown v-model="filter" z="20" w="40" size="md" :selectedId="filter" :list="[
            { id: 1, value: 'أعمالي' },
            { id: 2, value: 'أعمال غيري' },
          ]">
          </UiDropdown>
          
        </div>

        <div flex="~ gap-8">
          <NewBusiness />          
        </div>


        
      </div>

      <!-- Businesses -->
      <div v-if="store.getBusinesses.length > 0" grid="~ cols-1 md:cols-3 3xl:cols-4 gap-4" font="medium">
        <!-- Business -->
        <CardBusiness v-for="business in store.getBusinesses" :business="business" :key="business.id" />
      </div>
      <div v-else grid="~ cols-1 md:cols-3 3xl:cols-4 gap-4" font="medium">
        <!-- Business -->
        <CardBusiness v-for="business in 2" :key="business" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})
const store = useBusiness()



// Fetching Businesses
await store.fetch()

// Fetching Categories
store.fetchCategories()

const [gridState, gridToggle] = useToggle(false)



const filter = ref("1")
</script>
