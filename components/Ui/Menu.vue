<template>
  <div class="relative w-56 text-right h-content">
    <div ref="target" class="inline-block text-right">
      <UiMenuButton :active="state" @click="toggle()">
        {{ title }}
      </UiMenuButton>
      <Transition name="slide-fade">
        <UiMenuItems v-if="state">
          <slot />
        </UiMenuItems>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    default: "Open Menu",
  },
});

const [state, toggle] = useToggle(true);

const target = ref(null);
onClickOutside(target, () => (state.value = false));
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>