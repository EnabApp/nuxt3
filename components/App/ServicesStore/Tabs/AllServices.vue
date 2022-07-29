<template>
  <div flex="~" justify="between">
    <UiButton @click="filter()"  icon="i-fa:filter" title="خدماتي" :outline="true" color="warning" w="24" m="3" />
      <!-- <div class="i-line-md:question-circle-twotone text-warning animate-pulse" cursor="pointer"  w="5" h="5"></div> -->
      <span m="2" class="basis-1/6" flex="~" text="2xl success-500">نقاطي : 499</span>
  </div>
  <div p="2" h="96" grid="~ lg:cols-4 cols-2 gap-2" border="rounded-lg" overflow-y="auto">
    <!-- Services I Own -->
    <div grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="false?'border-errors-700' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
      <div class="i-bi-check-circle-fill" w="15" h="15"></div>
      <span self="auto" text="2xl" m="4">اسم الخدمة</span>
    </div>
    <!-- Services I don't have -->
    <div v-for="services in apps" :key="services" cursor="pointer" grid="~ flow-row auto-rows-max" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="true?'border-error-500 cursor-pointer' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
      <div class="i-ic:baseline-local-grocery-store" w="15" h="15"></div>
      <span self="auto" text="2xl" m="4">New</span>
      <span self="auto" text="2xl" :class="true ? 'text-success-500':'text-error-500'">400 نقطة</span>
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
const appsStore = useStoreApps();

const apps = ref(appsStore.getApps);

const filter = (id) =>{
  apps = this.apps.filter(app => app.id === 2)
}


console.log(apps)
</script>

<style>

</style>