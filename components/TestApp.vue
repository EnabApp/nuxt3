<template>
  <!-- Application -->
    <Transition>
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
        <div m="4" flex="~ col grow gap-4">
          <UiInput v-model="taskTitle" placeholder="مهمة جديدة" @keypress.enter="newTask()" />
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