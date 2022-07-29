<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
      <UiTabGroup flex="~ col" p="2" h="full" :tabs="['الصفحة الرئيسية', 'التحكم', 'Contact']">
        <template #tab-1>
          <AppSupermarketTabsHome :app="app" />
        </template>
        <template #tab-2>
          <AppSupermarketTabsControl :app="app" />
        </template>
        <template #tab-3>
          <h1>Contact</h1>
        </template>
      </UiTabGroup>
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
const appsStore = useStoreApps();
</script>
