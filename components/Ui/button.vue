<template>
<div class="flex flex-col gap-1">
    <nuxt-link v-if="to" :to="to" :class="classes">
      <!-- <ClientOnly>
        <i v-if="icon" :class="[icon]"></i>
      </ClientOnly> -->
      <span v-if="title" class="text-white">{{title}}</span>
    </nuxt-link>
    <button v-else :class="classes">
      <span v-if="title">{{title}}</span>
    </button>
</div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "bg-primary"
  },
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Button",
  },
  icon: {
    type: String,
  },
});

const classes = computed(() =>  {
  let array = [
    "py-2 px-4",
    "bg-b-100",
    "text-white",
    "dark:bg-w-100",
    "text-lg",
    "rounded-lg",
  ];
  return array;
});
</script>

<style>

</style>