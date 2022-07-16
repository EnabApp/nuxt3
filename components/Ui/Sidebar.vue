<template>
    <Transition>
        <div
        v-if="modelValue"
        bg="gray-500"
        h="sidebar"
        position="sticky"
        border="rounded-lg"
        p="3"
        w="50"
        m="x-2"
        >
            <slot />
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

// Define Emits
const emit = defineEmits(["confirm", "cancel"]);

// Close on click ESC
// onKeyStroke(["Escape"], (e) => emit("cancel"));
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  /* opacity: 0; */
  left: 100%;
  transform: translateX(100%);

}
</style>
