<!-- SHOW BUSINESSES -->

<template>
  <NuxtLayout name="user">
    <div flex="~ col gap-8">
      <!-- Header -->
      <Header />

      <!-- Title -->
      <h1 font="medium" text="3xl primaryOp dark:primary">الأعمال</h1>

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
        <UiDropdown w="40" :list="[
          { id: 1, value: 'أعمالي' },
          { id: 2, value: 'أعمال غيري' },
        ]">
        </UiDropdown>

        <!-- Divider -->
        <div h="full" w="1px" bg="secondary dark:secondaryOp"></div>

        <!-- Button -->
        <UiButton color="secondary" size="sm" icon="IconPlus">
          عمل جديد
        </UiButton>


      </div>

      <!-- Businesses -->
      <div grid="~ cols-1 md:cols-3 3xl:cols-4" font="medium">
        <!-- Business -->
        <div flex="~ col" rounded="xl" p="6" bg="secondary dark:secondaryOp">
          <!-- Header -->
          <div flex="~" items="center" justify="between">
            <div text="2xl primaryOp dark:primary">محل الحسوني للألبسة</div>
            <div flex="~ gap-1" text="tertiaryOp dark:tertiary" items="center">
              <span text="xl">6</span>
              <IconBoards w="6" h="6" />
            </div>
          </div>
          <!-- Location -->
          <p text="xl">
            فرع الحيانية
          </p>

          <span w="fit" font="medium" my="4" p="y-0.5 x-2" border="~ tertiaryOp dark:tertiary rounded-md">
            البسة
          </span>

          <div flex="~" justify="between" items="end" mt="2">
            <!-- Users -->
            <div flex="~" class="-space-x-3 space-x-reverse">
              <IconUser w="12" h="12" />
              <IconUser w="12" h="12" />
              <div bg="tertiaryOp dark:tertiary" rounded="full" flex="~" items="center" justify="center" w="12" h="12">
                <span font="medium" text="1rem primaryOp dark:primary">3+</span>
              </div>
            </div>

            <!-- Things -->
            <div flex="~ gap-1">
              <UiToolTip text="مالك العمل">
                <IconUserCircle text="tertiaryOp dark:tertiary" w="6" h="6" />
              </UiToolTip>
              <UiToolTip text="مفعل">
                <IconVerified text="green" w="6" h="6" />
              </UiToolTip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>

const store = useBusiness()

// Fetching Businesses
await store.fetch()
// console.log(store.getBusinessesAsUnits)

const mySpace = new Space({
  business: {
    name: 'أعمالي'
  },
  boards: [{ units: store.getBusinessesAsUnits }]
})

const [gridState, gridToggle] = useToggle(false)
</script>
