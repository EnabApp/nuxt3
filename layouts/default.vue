<template>
  <div
    h="screen"
    flex="~"
    bg="b-5 opacity-1"
    dark:bg-gradient="to-rb from-black to-b-90"
  >
    <!-- Sidebar -->
    <div id="sidebar"></div>

    <div flex="grow" border="rounded-lg">
      <!-- Header -->
      <UiHeader :tabs="tabs" />

      <!-- Content -->
      <div container="~" m="x-auto" flex="~" items="center" h="full" justify="center">
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
  {title: 'Home', route: '/', icon: 'i-line-md-moon-filled'},
  {title: 'Login', route: '/login', icon: 'i-line-md-moon-filled'},
];
</script>
