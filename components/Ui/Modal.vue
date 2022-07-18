<template>
  <Transition>
    <div
      @keypress.esc="$emit('cancel')"
      v-if="modelValue"
      position="absolute top-0 left-0"
      z="50"
      flex="~"
      place="items-center"
      justify="center"
      w="screen"
      h="screen"
      bg="b-25 dark:b-20"
      backdrop="~ blur-lg"
    >
      <div flex="~ col gap-2" h="full" max-w="2xl" min-w="2xl" max-h="xl">
        <!-- Header -->
        <div
          flex="~ gap-4"
          place="items-center"
          justify="between"
          p="x-2 y-2"
          text="2xl"
          font="medium"
        >
          <div flex="grow" text="w-80 dark:w-40">
            <slot name="title"></slot>
          </div>
          <div
            @click="$emit('cancel')"
            text="3xl w-80 hover:error-600"
            cursor="pointer"
          >
            <div text="w-80 dark:w-40" class="i-carbon-close hover:i-carbon-close-filled"></div>
          </div>
        </div>

        <!-- Content -->
        <div
          flex="grow"
          p="x-6 y-6"
          bg=" b-15 dark:w-5"
          border="rounded-lg"
        >
          <slot></slot>
        </div>

        <!-- Footer -->
        <div flex="~ gap-2" justify="center" m="t-4">
          <button v-if="confirm" @click="$emit('confirm')">
            {{ confirm }}
          </button>
          <button @click="$emit('cancel')">Cancel</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  confirm: {
    type: String,
    default: "",
  },
});

// Define Emits
const emit = defineEmits(["confirm", "cancel"]);

// Close on click ESC
onKeyStroke(["Escape"], (e) => emit("cancel"));
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
