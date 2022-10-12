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


<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
  border-radius: 1rem;

}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, .3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, .5);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0.6;
  /* filter: saturate(0.4) */
  /* filter: blur(0.25rem); */
}
</style>
