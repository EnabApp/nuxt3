<template>
  <!-- Application -->
    <Transition>
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
        <div flex="~">
          <!-- <iframe src="https://web.telegram.org/"></iframe> -->
        </div>
      </UiDesktopWindow>
    </Transition>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true
  }
})

</script>