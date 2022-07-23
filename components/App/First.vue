<template>
  <!-- Application -->
  <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :title="title" :app="app">
    <UiInput />
  </UiDesktopWindow>
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
