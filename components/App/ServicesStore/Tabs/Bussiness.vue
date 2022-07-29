<template>
<div h="full">
    <div p="2" bg="gray-300" grid="~ cols-4 gap-2" border="rounded-lg">
      <!-- BUSSINESES I Own -->
      <div grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="false?'animate-pulse border-errors-700' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
          <div class="i-ic:baseline-local-grocery-store" w="15" h="15"></div>
          <span self="auto" text="2xl" m="4">سوبرماركت</span>
          <span v-if="false" self="auto" text="2xl">free</span>
      </div>
      <!-- BUSSINESES I don't have -->
      <div v-for="bussiness in 8" :key="bussiness" cursor="pointer" grid="~ flow-row auto-rows-max" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="key=1 ?'border-error-500' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
          <div class="i-fluent:form-new-24-filled" w="15" h="15"></div>
          <span self="auto" text="2xl" m="4">New</span>
          <span self="auto" text="2xl" :class="false ? 'text-success-500':'text-error-500'">1999 نقطة</span>
      </div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  }
})

const [servicesState,servicesToggle] = useToggle()
const ServiceInfo = props.app.getSubApp(1)
</script>

<style>

</style>