<template>
  <!-- Application -->
  <ContextMenu>
    <Transition name="close-transition">
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
        <NuxtLayout name="global-one">
            <div h="full" flex="~ col" p="x-8">
                <div m="t-8">
                    <UiInput />
                </div>
                <div bg="w-10" m="y-8" border="rounded-lg" p="6" h="full" flex="grow">
                    as
                </div>
            </div>
        </NuxtLayout>
      </UiDesktopWindow>
    </Transition>
  </ContextMenu>
</template>

<script setup>
import App from "~/classes/App";
const myApp = new App({
  title: "الحاسبة",
  icon: "i-ic-baseline-calculate",
  size: "min-w-2xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
  maximizable: false,
  resizeable: false,
  utility: true,

  // zIndex: "30"
})

// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const app = computed(() => AppsStore.getApp(myApp));
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
