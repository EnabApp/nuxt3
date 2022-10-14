<template>
  <div>
    <NuxtLoadingIndicator color="#3393FF" />
    <NuxtPage />
  </div>
</template>

<script setup>

const route = useRoute();

useHead({
  titleTemplate: () => {
    return route.meta.title ? `${route.meta.title} · Enab` : "Enab";
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "bg-primary dark:bg-primaryOp text-tertiary dark:text-tertiaryOp",
    dir: "rtl",
    // oncontextmenu: "return false",

  },
  htmlAttrs: {
    lang: "ar",
  },
});
</script>
