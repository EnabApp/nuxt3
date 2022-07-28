<template>
  <div p="4" h="80" grid="~ lg:cols-4 cols-2 gap-2" border="rounded-lg" overflow-y="auto">
    <div @click="clicked(key)" v-for="(service,key) in 6" :key="service" grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="false?'animate-pulse border-errors-700' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
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
