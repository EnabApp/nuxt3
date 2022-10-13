<!-- SHOW SPACES FOR A BUSINESS -->

<template>
  <NuxtLayout name="store">
    <div flex="~ gap-10 grow">
      <!-- Right -->
      <div flex="grow">
        <div flex="~ col gap-4" overflow="y-auto" pl="2" min-h="full" h="0">
          <div grid="~ cols-3 gap-6" shrink="0">
            <!--  bg="secondary dark:secondaryOp  hover:opacity-70 dark:hover:opacity-70" -->
            <div v-for="item in 12" :key="'package' + item" flex="~ col gap-2" rounded="10px" transition="~ duration-100 ease-in-out" cursor="pointer" class="group" opacity="hover:70">
              <div bg="secondary dark:secondaryOp" class="aspect-square" rounded="xl"></div>
              <div flex="~ col gap-1" mx="2">
                <span text="xl tertiaryOp dark:tertiary group-hover:primaryOp dark:group-hover:primary" font="medium">إدارة {{category?.name}}</span>
                <div flex="~ gap-1">
                  <span>500</span>
                  <IconPoints w="16px" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


      <!-- Left -->
      <div flex="~ col basis-1/4 gap-4">
        <span font="medium" text="xl tertiaryOp dark:tertiary">الأكثر استخدامًا</span>
        <div flex="~ col grow gap-2" overflow="y-auto" pl="2" h="0">
          <!-- Cards -->
          <div v-for="item in 6" :key="item" flex="~ col" transition="~ duration-100 ease-in-out" cursor="pointer" rounded="10px" bg="secondary dark:secondaryOp hover:opacity-70 dark:hover:opacity-70" p="3">
            <span text="1rem primaryOp dark:primary" font="medium">ادارة المو مخازن</span>
            <div flex="~" justify="between">
              <span text="xs">الموارد البشرية</span>
              <div flex="~ gap-1">
                <span text="xs">250</span>
                <IconPoints w="12px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
  
<script setup>
definePageMeta({
  middleware: 'auth'
})

const store = useStore()
const { params } = useRoute()
const category = computed(() => store.getCategory(params.category_id))



</script>
  