<template>
    <div h="full">
      <div p="2">
        <span un-text="7xl">Home, sweet home!</span>
        <UiButton @click="secondApp.toggleRunning()" title="Second Window" />
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  }
})

const secondApp = props.app.getSubApp(1)
</script>