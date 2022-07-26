<template>
  <!-- Application -->
  <ContextMenu>
    <template #menu>
      <UiMenuItem icon="i-akar-icons-copy" @click="copy()" title="نس2خ" />
    </template>
    <Transition name="close-transition">
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
        <NuxtLayout name="global-two">
            <template #left>
              <UiInput />
            </template>
        </NuxtLayout>
      </UiDesktopWindow>
    </Transition>
  </ContextMenu>
</template>

<script setup>
import App from "~/classes/App";
const myApp = new App({
  title: "برنامج ثاني",
  icon: "i-bxs-cart",
//   maximized: true,
//   solid: true,
  size: "min-w-2xl min-h-3xl",
  parentApp: "سوبر ماركت",
});

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
