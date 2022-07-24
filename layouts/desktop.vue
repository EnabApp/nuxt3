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
    <div w="full" h="16" z="200">
      <BottomBar />
    </div>
  </div>
</template>

<script setup>
const [state, toggle] = useToggle(false);
const route = useRoute();

useHead({
  meta: [
    {
      name: "og:title",
      content: route.meta.title ? `${route.meta.title} · Enab` : "Enab",
    },
  ],
});
</script>
