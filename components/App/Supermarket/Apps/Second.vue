<template>
  <!-- Application -->
  <ContextMenu>
    <template #menu>
      <UiMenuItem icon="i-akar-icons-copy" @click="copy()" title="نس2خ" />
    </template>
    <Transition name="close-transition">
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
        <NuxtLayout name="global-two">
            <template #left>
              <UiInput />
            </template>
        </NuxtLayout>
      </UiDesktopWindow>
    </Transition>
  </ContextMenu>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped>
/* CLOSE TRANSITION */
.close-transition-enter-active {
  animation: bounce-in 0.3s;
}
.close-transition-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
