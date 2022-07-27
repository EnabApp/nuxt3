<template>
  <div h="full" flex="~ col">
    <div id="openedwindows"></div>
    <!-- class="backdrop-blur-2xl" -->
    <div flex="grow">
      <ContextMenu h="full">
        <slot />
      </ContextMenu>
    </div>

    {{ top }}
    {{ left }}
    {{ right }}
    {{ bottom }}

    <!-- Bottom Bar -->
    <div w="full" h="16" z="200">
      <BottomBar />
    </div>
  </div>
</template>

<script setup>
import { useScreenSafeArea } from '@vueuse/core'
import { onKeyStroke } from '@vueuse/core'

const [state, toggle] = useToggle(false);
const route = useRoute();

const appsStore = useStoreApps()

onKeyStroke(['Escape'], (e) => {
  // e.ctrlKey
  // e.shiftKey
  // e.altKey
  appsStore.closeWindow();
  e.preventDefault()
})

const {top, right, bottom, left} = useScreenSafeArea();


useHead({
  meta: [
    {
      name: "og:title",
      content: route.meta.title ? `${route.meta.title} · Enab` : "Enab",
    },
  ],
});
</script>
