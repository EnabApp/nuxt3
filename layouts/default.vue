<template>
  <div class="h-screen bg-gray-50 dark:bg-secondary-800">
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