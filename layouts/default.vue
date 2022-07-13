<template>
  <div class="h-screen bg-secondary-100">
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <slot />
  </div>
</template>

<script setup>
  const route = useRoute();
  const colorMode = useColorMode();

  useHead({
    meta: [
      {
        name: "og:title",
        content: route.meta.title ? `${route.meta.title} · Enab` : "Enab",
      },
    ],
  });
</script>

<style>
  body {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
</style>