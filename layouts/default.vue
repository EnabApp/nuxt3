<template>
  <div h="screen" flex="~" class="bg-white dark:bg-animation">
    <!-- Sidebar -->
    <div id="sidebar"></div>
    <div h="full" container="~" m="x-auto" flex="grow" border="rounded-lg">
        <!-- Header -->
        <UiHeader p="1" m="t-2" :tabs="tabs" />

        <!-- Content -->
        <div
          container="~"
          m="x-auto"
          flex="~"
          items="center"
          h="full"
          justify="center"
        >
          <slot />
        </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

// Color Mode Switching
const colorMode = useColorMode();
const { state: currentColor, next } = useCycleList(
  ["system", "light", "dark"],
  {
    initialValue: colorMode.preference,
  }
);
watch(
  () => currentColor.value,
  (newColor) => (colorMode.preference = newColor)
);

useHead({
  meta: [
    {
      name: "og:title",
      content: route.meta.title ? `${route.meta.title} · Enab` : "Enab",
    },
  ],
});

// Header Tabs
const tabs = [
  { title: "Home", route: "/", icon: "i-line-md-moon-filled" },
  { title: "Login", route: "/auth/login", icon: "i-line-md-moon-filled" },
  { title: "register", route: "/auth/register", icon: "i-line-md-moon-filled" },

];
</script>

<style scoped>
.dark .bg-white {
  background-image: linear-gradient(to top, transparent, black),
    linear-gradient(to right, rgba(17,24,39, 1), black);
  background-size: 100% 100%, 4000% 100%;
  animation: move 5s infinite ease-in;
}

@keyframes move {
  0% {
    background-position: center center, left center;
  }
  25% {
    background-position: center center, right center;
  }
  100% {
    background-position: center center, left center;
  }
}
</style>
