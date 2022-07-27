<template>
  <!-- Application -->
  <ContextMenu>
    <Transition name="close-transition">
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
            <UiTabGroup flex="~ col" p="2" h="full" :tabs="[
                'الصفحة الرئيسية', 'التحكم', 'Contact']">
              <template #tab-1>
                <AppSupermarketTabsHome />
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
  </ContextMenu>
</template>

<script setup>
import App from "~/classes/App";
import Widget from "~/classes/Widget"

const myApp = new App({
  title: "سوبر ماركت",
  icon: "i-bxs-cart",
  maximized: true,
  solid: true,
  widgets: [
    new Widget({ id: 1, title: "My Widget!", state: true }),
  ]
});



// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const app = computed(() => AppsStore.getApp(myApp));
const childrenApps = computed(() => AppsStore.getChildrenApps(myApp.title));
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
