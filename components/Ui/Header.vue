<template>
  <div w="full">
    <div p="x-6 y-1" flex="~ gap-2" justify="between" items="center">
      <div flex="~ gap-2 grow" items="center">
        <NuxtLink to="/" m="l-4" text="b-60 lg dark:w-60">Enab Website</NuxtLink>
        <NuxtLink v-for="tab in tabs" :key="tab.route" :to="tab.route" class="no-underline bg-b-5 hover:bg-b-10 group" activeClass="bg-primary-500 hover:bg-primary-700" flex="~ gap-2" text="sm" cursor="pointer" items="center" p="x-2 y-1" border="rounded-lg">
          <span text="b-60 group-hover:b-90">{{ tab.title }}</span>
          <div text="md b-40 group-hover:b-90" :class="tab.icon"></div>
        </NuxtLink>
      </div>
      <div @click="next()">
        <div v-if="currentColor == 'light'" text="4xl warning-300" class="i-line-md-sun-rising-filled-loop"></div>
        <div v-else-if="currentColor == 'dark'" text="4xl primary-500" class="i-line-md-moon-filled"></div>
        <div v-else text="4xl b-60 dark:w-60" class="i-line-md-computer"></div>
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
