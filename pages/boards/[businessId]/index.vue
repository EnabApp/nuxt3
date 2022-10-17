<!-- SHOW SPACES FOR A BUSINESS -->

<template>
  <NuxtLayout name="user">
    <div flex="~ col gap-8">
      <!-- Header -->
      <!-- <Header /> -->

      <!-- Title -->
      <h1 font="medium" text="3xl primaryOp dark:primary">{{ business?.name }}</h1>

      <!-- Actions -->
      <div flex="~ gap-8" font="medium" text="xl">
        <!-- Grid - List : Toggle -->
        <UiSwitch size="md" w="250px" :list="[
          { id: '1', value: 'قائمة', icon: 'IconBoards' },
          { id: '2', value: 'لوحة', icon: 'IconBoards' },
        ]" />


        <!-- Divider -->
        <div h="full" w="1px" bg="secondary dark:secondaryOp"></div>

        <!-- Filter -->
        <UiDropdown z="20" w="40" :list="[
          { id: 1, value: 'مساحاتي' },
          { id: 2, value: 'مساحات غيري' },
        ]">
        </UiDropdown>

        <!-- Divider -->
        <div h="full" w="1px" bg="secondary dark:secondaryOp"></div>

        <!-- Button -->
        <UiButton @click="newSpaceToggle()" color="secondary" size="sm" icon="IconPlus">
          مساحة جديدة
        </UiButton>

        <Teleport to="body">
          <UiModal v-model="newSpaceState" @cancel="modalCanceled">
            <template #title>إنشاء عمل جديد</template>
            <div flex="~ col gap-4">
              <span text="sm error dark:error" v-if="store.getCreateError">{{ store.getCreateError }}</span>
              <UiInput v-model="store.spaceCreation.name" @keydown="() => store.createError = null" size="md" label="الأسم" />
                <UiInput v-model="store.spaceCreation.description" size="md" label="الوصف" />
              <UiButton @click="create()" size="md" my="2">انشاء</UiButton>
            </div>
          </UiModal>
        </Teleport>


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

const [newSpaceState, newSpaceToggle] = useToggle(false);

const modalCanceled = () => {
  newSpaceState.value = false;
};

// Has no spaces in this business
if (store.getSpaces?.length <= 0) newSpaceState.value = true
watch( () => newSpaceState.value, (newVal) => {
  if (store.getSpaces?.length <= 0) newSpaceState.value = true
})

const create = async () => {
  let result = await store.create()
  if (result) newSpaceToggle()
}
</script>
  