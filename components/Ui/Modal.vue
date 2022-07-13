<template>
  <Transition>
    <div @keypress.esc="$emit('cancel')" v-if="state" class="absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-opacity-40 bg-secondary-300 backdrop-blur-sm">
      <div class="flex flex-col h-full max-w-3xl gap-2 max-h-xl">
        <!-- Header -->
        <div class="flex items-center justify-between gap-4 px-2 py-2 text-2xl font-medium">
          <div class="grow text-secondary-700">
            <slot name="title"></slot>
          </div>
          <div @click="$emit('cancel')" class="text-3xl cursor-pointer text-secondary-600 hover:text-error-600">
            <div class="i-carbon-close hover:i-carbon-close-filled"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="px-8 py-2 bg-gray-400 rounded-lg bg-opacity-20 grow text-secondary-500">
            <slot></slot>
        </div>

        <!-- Footer -->
        <div class="flex justify-center gap-2 mt-4">
            <button @click="$emit('confirm')">Confirm</button>
            <button @click="$emit('cancel')">Cancel</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

// Define Emits
const emit = defineEmits(["confirm", "cancel"]);

// Close on click ESC
onKeyStroke(["Escape"], (e) => emit("cancel"));
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
