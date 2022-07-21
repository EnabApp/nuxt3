<template>
  <button
    type="button"
    :class="[
      'inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md hover:text-b-90 dark:text-w-60 dark:hover:text-white cursor-pointer border-1 items-center',

      active
      ? 'bg-s-15 dark:bg-s-40 border-s-20 dark:border-s-70'
      : 'bg-s-10 hover:bg-s-15 dark:hover:bg-s-40 dark:bg-s-30 border-transparent'
    ]"
  >
    Options
    <div class="mr-2 -ml-1 i-ep-arrow-down-bold"></div>
  </button>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
</script>
