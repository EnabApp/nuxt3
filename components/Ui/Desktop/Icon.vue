<template>
  <!-- Main -->
  <div @click="app.running = true" w="32" h="32" bg="hover:w-40" p="2" border="~ 2 rounded-lg" flex="~ col" justify="center" items="center" un-text="gray-600" cursor="pointer" :class="{
    'border-success': app.running,
    'border-error': !app.running,
  }">
    <!-- Icon -->
    <div :class="app.icon" basis="2/3" w="full" h="full"></div>

    <!-- Icon Name -->
    <div un-text="xl" basis="1/3" class="w-24 overflow-hidden text-center truncate" flex="~" items="center">
      <span>{{ app.title }}</span>
    </div>

  </div>

</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    default: "",
  },
})
</script>
