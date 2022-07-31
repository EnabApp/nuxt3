<template>
  <div h="full" flex="~ col">
    <div id="openedwindows"></div>
    <!-- class="backdrop-blur-2xl" -->
    <div flex="grow">
      <ContextMenu h="full">
        <slot />
      </ContextMenu>
    </div>

    <!-- Bottom Bar -->
    <Transition>
      <div v-show="!(anyRunningIsMaximized && !positionBottom)" w="full" position="absolute" bottom="5" z="200">
        <BottomBar />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onKeyStroke } from '@vueuse/core'

const [state, toggle] = useToggle(false);
const route = useRoute();

const appsStore = useStoreApps()


const { x, y, sourceType } = useMouse()
const { width, height } = useWindowSize()

const anyRunningIsMaximized = computed(() => appsStore.anyRunningIsMaximized)
const positionBottom = computed(() => height.value - y.value <= 75)

onKeyStroke(['Escape'], (e) => {
  // e.ctrlKey
  // e.shiftKey
  // e.altKey
  appsStore.closeWindow();
  e.preventDefault()
})

useHead({
  meta: [
    {
      name: "og:title",
      content: route.meta.title ? `${route.meta.title} · Enab` : "Enab",
    },
  ],
});
</script>


<style scoped>
.v-enter-active {
  animation: bounce-in 0.3s;
}
.v-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    bottom: -15px;
    /* transform: translateY(100px); */
  }
}
</style>