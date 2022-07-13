<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute()

  useHead({
    titleTemplate: () => {
      return route.meta.title ? `${route.meta.title} · Enab` : 'Enab';
    },
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    charset: "utf-8",
    meta: [{ name: "description", content: "My amazing site." }],
    bodyAttrs: {
      class: 'm-0 p-0 overflow-hidden font-sans',
      dir: 'rtl'
    },
  });
</script>