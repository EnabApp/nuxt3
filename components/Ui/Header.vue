<template>
  <div bg="primary dark:gray-900" shadow="sm" >
    <div p="x-4 y-1" flex="~ gap-2" justify="between" items="center">
      <!-- Right : grow -->
      <div flex="~ gap-2 grow" items="center">
        <!-- Website Logo / Name -->
        <NuxtLink to="/" m="l-4" un-text="w-80 lg dark:w-60" no-underline="~">Enab</NuxtLink>

        <!-- Tabs Buttons -->
        <NuxtLink v-for="tab in tabs" :key="tab.route" :to="tab.route" class="no-underline group" activeClass="bg-w-10 dark:bg-s-15 border border-s-10 dark:border-w-20" flex="~ gap-2" un-text="sm w-60 hover:w-90 dark:w-60 dark:hover:white" cursor="pointer" items="center" p="x-4 y-2" border="rounded-lg">
          {{ tab.title }}
          <div :class="tab.icon"></div>
        </NuxtLink>

      </div>

      <!-- Left -->
      <div flex="~ gap-2">
        <div text="xl s-60 dark:w-60" class="i-akar-icons:instagram-fill"></div>

        <div @click="next()">
          <div v-if="currentColor == 'light'" text="xl warning-300" class="i-line-md-sun-rising-filled-loop"></div>
          <div v-else-if="currentColor == 'dark'" text="xl primary-500" class="i-line-md-moon-filled"></div>
          <div v-else text="xl s-60 dark:w-60" class="i-line-md-computer"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

defineProps({
  tabs: {
    type: Array,
    default: []
  }
})

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
</script>
