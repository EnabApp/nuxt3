<!-- SHOW BUSINESSES -->

<template>
  <NuxtLayout name="user">
    <div flex="~ col gap-8">
      <!-- Header -->
      <Header />

      <!-- Title -->
      <h1 font="medium" text="4xl">الأعمال</h1>

      <!-- Actions -->
      <div flex="~ gap-8" font="medium" text="xl">
        <!-- Grid - List : Toggle -->
        <div flex="~">
          <div @click="gridState = true" w="30" :class="[
              gridState
              ? 'bg-tertiary dark:bg-tertiaryOp'
              : 'bg-secondary dark:bg-secondaryOp'
            ]" text="tertiaryOp dark:tertiary" cursor="pointer" flex="~ gap-2" p="3" items="center" rounded="r-xl">
            <IconNotification w="6" h="6" />
            <span>قائمة</span>
          </div>
          <div @click="gridState = false" w="30" :class="[
              !gridState
              ? 'bg-tertiary dark:bg-tertiaryOp'
              : 'bg-secondary dark:bg-secondaryOp'
            ]" text="tertiaryOp dark:tertiary" cursor="pointer" flex="~ gap-2" p="3" items="center" rounded="l-xl">
            <IconNotification w="6" h="6" />
            <span>لوحة</span>
          </div>
        </div>

        <!-- Divider -->
        <div h="full" w="1px" bg="secondary dark:secondaryOp"></div>

        <!-- Filter -->
        <UiDropdown
          w="40"
          :list="[
                { id: 1, value: 'أعمالي' },
                { id: 2, value: 'أعمال غيري' },
              ]"
        >
        </UiDropdown>

        <!-- Divider -->
        <div h="full" w="1px" bg="secondary dark:secondaryOp"></div>

        <!-- Button -->
        <div cursor="pointer" font="medium" text="xl tertiaryOp dark:tertiary hover:tertiary dark:hover:tertiaryOp" p="x-4" flex="~ gap-2" items="center" justify="center" bg="secondary dark:secondaryOp" rounded="xl">
          <IconPlus w="6" h="6" />
          <span >عمل جديد</span>
        </div>


      </div>

      <!-- Businesses -->
      <div grid="~ cols-5">
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

          <span w="fit" font="medium" my="4" p="y-1 x-2" border="~ tertiaryOp dark:tertiary rounded-md">
            البسة
          </span>

          <div flex="~" justify="between" mt="2">
            <!-- Users -->
            <div flex="~" class="-space-x-3 space-x-reverse">
              <IconUser w="12" h="12" />
              <IconUser w="12" h="12" />
              <div bg="tertiaryOp dark:tertiary" rounded="full" flex="~" items="center" justify="center" w="12" h="12">
                <span font="medium" text="1rem primaryOp dark:primary">3+</span>
              </div>
            </div>

            <!-- Things -->
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
  boards: [ { units: store.getBusinessesAsUnits } ]
})

const [ gridState, gridToggle ] = useToggle(false)
</script>
