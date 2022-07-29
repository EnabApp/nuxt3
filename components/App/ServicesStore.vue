<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow
      v-if="app.running"
      v-show="!app.minimized"
      :app="app"
    >

        <!-- Search and Points -->
        <!-- <div flex="~ row" justify="between">
          <UiInput class="basis-2/6" placeholder="البحث عن خدمة" @keypress.enter="newService()" /> 
          <div class="place-items-left">
            <UiButton @click="dd()" icon="i-bxs-cart" :outline="true" color="warning" w="24" />
            <div class="i-line-md:question-circle-twotone text-warning animate-pulse" cursor="pointer"  w="5" h="5"></div>
            <span m="2" class="basis-1/6" flex="~" text="2xl success-500">نقاطي : 499</span>
          </div>
        </div> -->

        <AppServicesStoreTabsBussiness :app="app" />

        <UiTabGroup flex="~ col" p="2" h="screen"  overflow-y="scroll" :tabs="['التصنيفات','جميع الخدمات', 'خدماتي']">
          <!-- BUSSINESES -->
          <template #tab-1>
            <AppServicesStoreTabsBussiness :app="app" />
          </template>
          <!-- All Services -->
          <template #tab-2>
            <AppServicesStoreTabsAllServices :app="app" />
          </template>
          <!-- My Services -->
          <template #tab-3>
            <AppServicesStoreTabsMyServices :app="app" />
          </template>
        </UiTabGroup>
        <!-- Second Page -->
        <Transition>
          <div 
          v-if="opened"
          absolute="~" w="full" align="center" border="w-10 2" h="full" bg="w-90" class="m-3">
            <span>Info page </span>
            <UiButton @click="dd()" title="Info page" color="warning" w="24" :solid="true" />
          </div>
        </Transition>
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true
  }
})
const opened = ref(false)
const dd = () => {
  opened.value = !opened.value
}
const appsStore = useStoreApps();

///////////////////////////////
</script>