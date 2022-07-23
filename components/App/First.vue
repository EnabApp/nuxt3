<template>
  <!-- Application -->
  <UiDesktopWindow v-if="isRunning" :title="title" :app="getApp">
    <!-- {{slotProps}} -->
  </UiDesktopWindow>
</template>

<script setup>
import App from "~/classes/App"
const myApp = new App("First App", "i-akar-icons-cart")

// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const getApp = computed(() => AppsStore.getApp(myApp));
const isRunning = computed( () => getApp.value.running);

const title = "My App Window :)";
</script>
