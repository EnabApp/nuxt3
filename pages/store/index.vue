<template>
  <NuxtLayout name="store">
    <div flex="~ gap-10 grow">
      <!-- Right -->
      <div flex="~ col" w="full">
        <div flex="~ col gap-4" overflow="y-auto" pl="2" min-h="full" h="0">
          <!-- BANNER -->
          <div position="relative" flex="~" justify="between" rounded="10px" p="12" style="background-image: url('https://www.inma.org/files/images/blogs/feature_photos/print_september20_hannah_2020-in-ads-1800.jpg'); background-size: contain" min-h="300px">
            <!-- Content -->
            <div flex="~ col basis-1/3 gap-2" justify="end" z="10">
              <div flex="~ col gap-4">
                <span text="4xl primaryOp dark:primary" font="medium">خرب بأنّه لو أكضّك <br />
                  حسن كاظم</span>
                <p text="xl">
                  لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                </p>
              </div>
              <UiButton size="lg" color="success" w="fit" mt="4">شراء</UiButton>
            </div>
            <!-- Overlay -->
            <div class="bg-gradient-to-br from-transparent to-primaryOp opacity-90" position="absolute" top="0" right="0" rounded="9px" w="full" h="full"></div>
          </div>


          <!-- PACKAGES -->
          <div grid="~ cols-3 gap-4" z="15" shrink="0">
            <NuxtLink v-for="item in 9" :key="'package' + item" :to="`/store/package-${item}`" decoration="none" color="inherit" flex="~ col gap-4" rounded="10px" p="8" bg="secondary dark:secondaryOp  hover:opacity-70 dark:hover:opacity-70" transition="~ duration-100 ease-in-out" cursor="pointer">
              <span text="xl primaryOp dark:primary" font="medium">حزمة المشاريع الناشئة</span>
              <p w="75%">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</p>
              <div flex="~ gap-1" justify="end">
                <span text="xs">500</span>
                <IconPoints w="12px" />
              </div>
            </NuxtLink>
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
  