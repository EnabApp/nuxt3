<template>
    <div ref="menuEl" position="relative">
        <!-- Menu Icon -->
        <UiIconsEnab @click="menuPanelToggle()" cursor="pointer" h="45px" />

        <!-- Menu Panel -->
        <Transition name="menu-panel">
            <div v-if="menuPanelState" position="absolute" w="340px" h="500px" p="4" bottom="15" bg="primaryOp" border="rounded-10px">
                <div class="i-line-md-loading-loop"></div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { exit } from '@tauri-apps/api/process';
import { useNow, useDateFormat } from "@vueuse/core";

const appsStore = useStoreApps();

const [menuPanelState, menuPanelToggle] = useToggle(false)
const menuEl = ref(null)
onClickOutside(menuEl, (event) => menuPanelState.value = false)

const isTauri = useTauri();

const closeApp = async () => await exit(1);

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
