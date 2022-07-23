<template>
    <div p="y-8 x-8" z="10">
        <slot />
    </div>
</template>

<script setup>
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