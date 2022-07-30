<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow
      v-if="app.running"
      v-show="!app.minimized"
      :app="app"
    >
      <AppServicesStoreTabsAllServices :app="app" />
      <!-- <AppServicesStoreTabsMyServices :app="app" /> -->
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

///////////////////////////////
</script>