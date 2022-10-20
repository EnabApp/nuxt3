<!-- SHOW SPACES FOR A BUSINESS -->

<template>
  <NuxtLayout name="user">
    <div flex="~ col gap-8">
      <!-- Header -->
      <!-- <Header /> -->

      <!-- Title -->
      <h1 font="medium" text="3xl primaryOp dark:primary">{{ business?.name }}</h1>

      <!-- Actions -->
      <div flex="~" justify="between" font="medium" text="xl">
        <div flex="~  gap-8">
          <!-- Grid - List : Toggle -->
          <UiSwitch size="md" w="250px" :list="[
            { id: '1', value: 'قائمة', icon: 'IconBoards' },
            { id: '2', value: 'لوحة', icon: 'IconBoards' },
          ]" />


          <!-- Divider -->
          <div h="full" w="1px" bg="secondary dark:secondaryOp"></div>

          <!-- Filter -->
          <UiDropdown z="20" w="40" size="md" :list="[
            { id: 1, value: 'مساحاتي' },
            { id: 2, value: 'مساحات غيري' },
          ]">
          </UiDropdown>
        </div>

        <div flex="~ gap-4">
          <NewSpace />
          <PermissionsSpace />
        </div>



      </div>

      <!-- Spaces -->
      <div grid="~ cols-1 md:cols-3 3xl:cols-4 gap-4" font="medium">
        <!-- Space -->
        <CardSpace v-for="space in store.getSpaces" :space="space" :key="space.id" />
      </div>
    </div>
  </NuxtLayout>
</template>
  
<script setup>
definePageMeta({
  middleware: 'auth'
})
const store = useSpace()
const router = useRouter()
const { businessId } = useRoute()?.params

// Fetching spaces
await store.fetchSpaces(businessId)


const business = store.getSpaces?.[0]?.business



</script>
  