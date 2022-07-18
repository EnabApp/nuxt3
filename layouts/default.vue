<template>
  <div>
    <div @click="next()" w="fit">
      <div v-if="currentColor == 'light'" text="4xl warning-300" class="i-line-md-sun-rising-filled-loop"></div>
      <div v-else-if="currentColor == 'dark'" text="4xl primary-500" class="i-line-md-moon-filled"></div>
      <div v-else text="4xl secondary-100" class="i-line-md-computer"></div>
    </div>

    <div flex="~">
        <div id="sidebar"></div>
        <div h="main-content" flex="grow" bg="white dark:secondary-700" border="rounded-lg">
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
</script>
