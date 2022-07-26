<template>
  <!-- Application -->
  <ContextMenu>
    <Transition name="close-transition">
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
        <div m="4" flex="~ col grow gap-4">
          <UiInput v-model="serviceTitle" placeholder="خدمة جديدة" @keypress.enter="newService()" />

          <UiTabGroup :col="false" :tabs="['التصنيفات','جميع الخدمات', 'خدماتي']">
            <template #tab-1>
              <div max-h="2xl lg:xl md:xl" m="y-8" grid="~ cols-2 gap-2" p="l-2" border="rounded-lg" overflow-y="scroll">
                <div v-for="service in 4" :key="service" bg="w-10" items="center" p="4" border="rounded-lg" un-text="w-50">
                  <div class="i-bi-check-circle-fill hover:text-w-70" w="15" h="15"></div>
                  <span self="auto" text="2xl" m="4">service</span>
                </div>
              </div>
            </template>
            <template #tab-2>
                <div max-h="2xl lg:xl md:xl" m="y-8" grid="~ lg:cols-3 cols-2 gap-2" p="l-2" border="rounded-lg" overflow-y="scroll">
                  <div v-for="service in 10" :key="service" bg="w-10" items="center" p="4" border="rounded-lg" un-text="w-50">
                    <div class="i-bi-check-circle-fill hover:text-w-70" w="15" h="15"></div>
                    <span self="auto" text="2xl" m="4">title</span>
                  </div>
                </div>
            </template>
            <template #tab-3>
              <h1>About</h1>
            </template>
            <template #tab-4>
              <h1>Contact</h1>
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
