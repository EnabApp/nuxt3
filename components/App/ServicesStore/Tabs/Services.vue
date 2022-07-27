<template>
  <div p="4" h="80" grid="~ lg:cols-4 cols-2 gap-2" border="rounded-lg" overflow-y="auto">
    <!-- Services I Own -->
    <div @click="clicked(1)" grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="false?'border-errors-700' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
        <div class="i-bi-check-circle-fill" w="15" h="15"></div>
        <span self="auto" text="2xl" m="4">اسم الخدمة</span>
        <span v-if="false" self="auto" text="2xl">30 نقطة</span>
    </div>
    <!-- Services I don't have -->
    <div @click="clicked(key)" v-for="(service,key) in 4" :key="service" cursor="pointer" grid="~ flow-row auto-rows-max" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="true?'border-error-500 cursor-pointer' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
        <div class="i-ic:baseline-local-grocery-store" w="15" h="15"></div>
        <span self="auto" text="2xl" m="4">New</span>
        <span self="auto" text="2xl" :class="true ? 'text-success-500':'text-error-500'">400 نقطة</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>