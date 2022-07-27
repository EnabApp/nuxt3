<template>
  <!-- Application -->
  <ContextMenu>
    <Transition name="close-transition">
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
        <div m="4" flex="~ col grow gap-4" h="md">
          <!-- Search and Points -->
          <div flex="~ row" justify="between">
            <UiInput class="basis-2/6" placeholder="البحث عن خدمة" @keypress.enter="newService()" /> 
            <div class="place-items-left">
              <div class="i-line-md:question-circle-twotone text-warning animate-pulse" cursor="pointer"  w="5" h="5"></div>
              <nuxt-link to="/" class="no-underline">
                <span m="2" class="basis-1/6" flex="~" text="2xl success-500">نقاطي : 499</span>
              </nuxt-link>
            </div>
          </div>

          <UiTabGroup :col="false" :tabs="['التصنيفات','جميع الخدمات', 'خدماتي']">
            <!-- BUSSINESES -->
            <template #tab-1>
              <div p="4" h="80" grid="~ cols-4 gap-2" border="rounded-lg" overflow-y="scroll">
                <!-- BUSSINESES I Own -->
                <div @click="clicked(-1)" grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="false?'animate-pulse border-errors-700' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
                  <div class="i-ic:baseline-local-grocery-store" w="15" h="15"></div>
                  <span self="auto" text="2xl" m="4">سوبرماركت</span>
                  <span v-if="false" self="auto" text="2xl">free</span>
                </div>
                <!-- BUSSINESES I don't have -->
                <div @click="clicked(key)" v-for="(bussiness,key) in 4" :key="bussiness" grid="~ flow-row auto-rows-max" cursor="help" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="key=1 ?'animate-pulse border-error-500' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
                  <div class="i-fluent:form-new-24-filled" w="15" h="15"></div>
                  <span self="auto" text="2xl" m="4">New</span>
                  <span self="auto" text="2xl" :class="false ? 'text-success-500':'text-error-500'">1999 نقطة</span>
                </div>
              </div>
            </template>
            <!-- All Services -->
            <template #tab-2>
              <div p="4" h="80" grid="~ lg:cols-4 cols-2 gap-2" border="rounded-lg" overflow-y="auto">
                <!-- Services I Own -->
                <div @click="clicked(1)" grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="false?'animate-pulse border-errors-700' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
                  <div class="i-bi-check-circle-fill" w="15" h="15"></div>
                  <span self="auto" text="2xl" m="4">اسم الخدمة</span>
                  <span v-if="false" self="auto" text="2xl">30 نقطة</span>
                </div>
                <!-- Services I don't have -->
                <div @click="clicked(key)" v-for="(service,key) in 4" :key="service" grid="~ flow-row auto-rows-max" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="true?'animate-pulse border-error-500 cursor-pointer' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
                  <div class="i-ic:baseline-local-grocery-store" w="15" h="15"></div>
                  <span self="auto" text="2xl" m="4">New</span>
                  <span self="auto" text="2xl" :class="true ? 'text-success-500':'text-error-500'">400 نقطة</span>
                </div>
              </div>
            </template>
            <!-- My Services -->
            <template #tab-3>
              <div p="4" h="80" grid="~ lg:cols-4 cols-2 gap-2" border="rounded-lg" overflow-y="auto">
                <div @click="clicked(key)" v-for="(service,key) in 6" :key="service" grid="~ flow-row auto-rows-max" cursor="pointer" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="false?'animate-pulse border-errors-700' :'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500'" >
                  <div class="i-bi-check-circle-fill" w="15" h="15"></div>
                  <span self="auto" text="2xl" m="4">اسم الخدمة</span>
                  <span v-if="false" self="auto" text="2xl">30 نقطة</span>
                </div>
              </div>
            </template>
          </UiTabGroup>
        </div>
      </UiDesktopWindow>
    </Transition>
  </ContextMenu>
</template>

<script setup>
import App from "~/classes/App";
const myApp = new App({
  title: "متجر الخدمات",
  icon: "i-fluent:store-microsoft-16-filled",
  size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
  maximizable: true,
  resizeable: false,
  utility: true,

})

// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const app = computed(() => AppsStore.getApp(myApp));

///////////////////////////////
const serviceTitle = ref('');
const services = ref([]);

const newService = () => {
  services.value.push({
    title: serviceTitle.value,
    completed: false,
    time: useDateFormat(useNow(), "YYYY-MM-DD"),
  })
  serviceTitle.value = ''
};
const clicked = (key) =>{
  console.log(key)
}
</script>

<style scoped>
/* CLOSE TRANSITION */
.close-transition-enter-active {
  animation: bounce-in 0.3s;
}
.close-transition-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
