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
              <AppServicesStoreTabsBussiness />
            </template>
            <!-- All Services -->
            <template #tab-2>
              <AppServicesStoreTabsServices />
            </template>
            <!-- My Services -->
            <template #tab-3>
              <AppServicesStoreTabsMyServices />
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
  maximized: true,
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
