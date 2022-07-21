<template>
  <div h="screen" flex="~ col" class="bg-secondary dark:bg-animation">
    <!-- Header -->
    <UiHeader p="1" :tabs="tabs" />
    <div h="full" container="~" m="x-auto" flex="~ col grow" border="rounded-lg">
      <!-- Sidebar -->
      <div id="sidebar"></div>

        <!-- Content -->
        <div
          container="~"
          m="x-auto"
          h="full"
          w="full"
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
.dark .bg-secondary {
  background-image: linear-gradient(to top, transparent, black),
    linear-gradient(to right, rgb(22, 31, 51), black);
  background-size: 100% 100%, 4000% 100%;
  animation: move 5s infinite ease-in;
}

@keyframes move {
  0% {
    background-position: center center, left center;
  }
  30% {
    background-position: center center, right center;
  }
  90% {
    background-position: center center, left center;
  }
}
</style>
