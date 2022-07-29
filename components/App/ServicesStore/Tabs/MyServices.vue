<template>
  <div p="2" h="96" grid="~ lg:cols-4 cols-2 gap-2" border="rounded-lg" overflow-y="auto">
    <div v-for="service in 4" :key="service" grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500" >
        <div class="i-bi-check-circle-fill" w="15" h="15"></div>
        <span self="auto" text="2xl" m="4">اسم الخدمة</span>
        <span v-if="false" self="auto" text="2xl">30 نقطة</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>