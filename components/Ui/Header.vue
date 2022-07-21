<template>
  <div bg="s-10 dark:gray-900" border="rounded-lg" >
    <div p="x-4 y-1" flex="~ gap-2" justify="between" items="center">
      <!-- Right : grow -->
      <div flex="~ gap-2 grow" items="center">
        <!-- Website Logo / Name -->
        <NuxtLink to="/" m="l-4" text="b-80 lg dark:w-60" no-underline="~">Enab</NuxtLink>

        <!-- Tabs Buttons -->
        <!-- <UiButton color="error" v-for="tab in tabs" :title="tab.title" :icon="tab.icon" :key="tab.route" :to="tab.route" activeClass="bg-s-10 hover:bg-s-15 dark:bg-s-15 border border-s-10 dark:border-w-20"/> -->
        <NuxtLink v-for="tab in tabs" :key="tab.route" :to="tab.route" class="no-underline group" activeClass="bg-s-10 hover:bg-s-15 dark:bg-s-15 border border-s-10 dark:border-w-20" flex="~ gap-2" text="sm" cursor="pointer" items="center" p="x-2 y-1" border="rounded-lg">
          <span text="b-60 group-hover:b-80 dark:w-40 dark:group-hover:w-70">{{ tab.title }}</span>
          <div text="md b-60 group-hover:b-80 dark:w-40 dark:group-hover:w-70" :class="tab.icon"></div>
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
