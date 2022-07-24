<template>
  <div h="full">
    <ContextMenu h="full">
      <slot />
    </ContextMenu>
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
