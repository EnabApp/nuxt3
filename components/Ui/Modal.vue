<template>
  <Transition>
    <div
      @keypress.esc="$emit('cancel')"
      v-if="state"
      position="absolute top-0 left-0"
      z="50"
      flex="~"
      place="items-center"
      justify="center"
      w="screen"
      h="screen"
      bg="opacity-40 dark:bg-opacity-50 secondary-300 dark:secondary-800"
      backdrop="~ blur-sm"
    >
      <div flex="~ col gap-2" h="full" max-w="2xl" max-h="xl">
        <!-- Header -->
        <div
          flex="~ gap-4"
          place="items-center"
          justify="between"
          p="x-2 y-2"
          text="2xl"
          font="medium"
        >
          <div flex="grow" text="secondary-700 dark:secondary-400">
            <slot name="title"></slot>
          </div>
          <div
            @click="$emit('cancel')"
            text="3xl secondary-600 hover:error-600"
            cursor="pointer"
          >
            <div class="i-carbon-close hover:i-carbon-close-filled"></div>
          </div>
        </div>

        <!-- Content -->
        <div
         flex="grow"
          p="x-8 y-2"
          bg="gray-400 opacity-20 bg-opacity-10"
          border="~ rounded-lg"
          text="secondary-500 dark:secondary-100"
        >
          <slot></slot>
        </div>

        <!-- Footer -->
        <div flex="~ gap-2" justify="center" m="t-4">
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
