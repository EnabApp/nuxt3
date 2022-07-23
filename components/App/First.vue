<template>
  <!-- Application -->
  <Transition name="close-transition">
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :title="title" :app="app">
      <UiInput />
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
import App from "~/classes/App"
const myApp = new App("First App", "i-akar-icons-cart")

// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const app = computed(() => AppsStore.getApp(myApp));

const title = "My App Window :)";
</script>


<style scoped>
/* CLOSE TRANSITION */
.close-transition-enter-active {
  animation: bounce-in 0.5s;
}
.close-transition-leave-active {
  animation: bounce-in 0.5s reverse;
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