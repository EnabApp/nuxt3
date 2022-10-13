<!-- SHOW SPACES FOR A BUSINESS -->

<template>
  <NuxtLayout name="user">
    <div flex="~ col gap-8 grow">

      <h1 font="medium" text="3xl primaryOp dark:primary">المتجر</h1>

      <!-- HEADER -->
      <StoreHeader />

      <!-- CONTENT -->
      <div flex="~ gap-10 grow">
        <!-- Right -->
        <div flex="grow">
          <div flex="~ col gap-4" overflow="y-auto" pl="2" min-h="full" h="0">
            <div min-h="200px" rounded="10px" p="12" bg="secondary dark:secondaryOp">
              qwdqwd
            </div>
            <div grid="~ cols-2 gap-4" shrink="0">
              <div v-for="item in 8" :key="'package' + item" flex="~ col gap-4" rounded="10px" p="8" bg="secondary dark:secondaryOp  hover:opacity-70 dark:hover:opacity-70" transition="~ duration-100 ease-in-out" cursor="pointer">
                <span text="xl primaryOp dark:primary" font="medium">حزمة المشاريع الناشئة</span>
                <p w="75%">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</p>
                <div flex="~ gap-1" justify="end">
                  <span text="xs">500</span>
                  <IconPoints w="12px" />
                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- Left -->
        <div flex="~ col basis-1/5 gap-4">
          <span font="medium" text="xl tertiaryOp dark:tertiary">اللوحات الجديدة</span>
          <div flex="~ col grow gap-2" overflow="y-auto" pl="2" h="0">
            <!-- Cards -->
            <div v-for="item in 8" :key="item" flex="~ col" transition="~ duration-100 ease-in-out" cursor="pointer" rounded="10px" bg="secondary dark:secondaryOp hover:opacity-70 dark:hover:opacity-70" p="3">
              <span text="1rem primaryOp dark:primary" font="medium">إدارة الموظفين</span>
              <div flex="~" justify="between">
                <span text="xs">الموارد البشرية</span>
                <div flex="~ gap-1">
                  <span text="xs">500</span>
                  <IconPoints w="12px" />
                </div>
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
</script>
  