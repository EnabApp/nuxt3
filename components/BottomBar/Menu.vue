<template>
  <div ref="menuEl" position="relative">
    <!-- Menu Icon -->
    <UiIconsEnab @click="menuPanelToggle()" cursor="pointer" h="45px" />

    <!-- Menu Panel -->
    <Transition name="menu-panel">
      <div v-if="menuPanelState" position="absolute" w="555px" min-h="595px" m="4" bottom="76px" flex="~ col" justify="between">
        <div flex="~ col grow" bg="primary dark:primaryOp" p="y-48px x-35px" border="~ b-0 secondary dark:secondaryOp rounded-t-10px">
          <!-- Search Bar -->
          <BottomBarMenuSearch v-model="searchText" />

          <!-- Quick Access -->
          <BottomBarMenuQuickAccess :apps="apps" />

          <!-- Statistics -->
          <BottomBarMenuStatistics />
        </div>

        <BottomBarMenuActionBar />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { exit } from "@tauri-apps/api/process";
import { useToggle } from "@vueuse/core";

const appsStore = useStoreApps();

const [menuPanelState, menuPanelToggle] = useToggle(false);
const menuEl = ref(null);
onClickOutside(menuEl, (event) => (menuPanelState.value = false));

const isTauri = useTauri();

const closeApp = async () => await exit(1);



////////////////////////////
// Applications Searching //
////////////////////////////
const searchText = ref("");
const apps = computed(() => {
  if (searchText.value)
    return appsStore.getOwned.filter(app => app.title.includes(searchText.value));
  else
    return appsStore.getOwned
});

</script>

 

<style scoped>
.menu-panel-enter-active {
  transition: all 0.15s ease-out;
}

.menu-panel-leave-active {
  transition: all 0.15s ease-in;
}

.menu-panel-enter-from,
.menu-panel-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
