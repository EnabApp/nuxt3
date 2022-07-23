<template>
  <div>
    <ContextMenu>
      <slot />
    </ContextMenu>
    <!-- <div @click.right="toggle()">
      <div v-if="state">
        
      </div>
    </div> -->
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
