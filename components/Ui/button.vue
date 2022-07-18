<template>
<div flex="~ col gap-1">
    <nuxt-link v-if="to" :to="to" :class="classes">
      <!-- <ClientOnly>
        <i v-if="icon" :class="[icon]"></i>
      </ClientOnly> -->
      <span v-if="title" class="text-gray-600 dark:text-w-80">{{title}}</span>
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
    default: "primary",
  },
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
  outline:{
    type: Boolean,
    default: false,
  },
  solid: { 
    type: Boolean, 
    default: false 
  },
});

const classes = computed(() =>  {
  let array = [
    "py-2 px-4 m-3",
    "focus:outline-none",
    "focus:ring-4",
    "text-sm",
    "text-center",
    "rounded-lg",
  ];
  if (props.outline) {
    array.push("border border-" + props.color + "-300");
  }
  if (props.solid) {
    array.push(
      ...[
        "text-" + props.color + "-50",
        "hover:text-white",
        "bg-" + props.color + "-200",
        "hover:bg-" + props.color + "-600",
        "focus:ring-" + props.color + "-200",
      ]
    );
  } else {
    array.push(
      ...[
        "bg-" + props.color + "-100",
        "text-" + props.color + "-500",
        "hover:bg-" + props.color + "-100",
        "focus:ring-" + props.color + "-200",
      ]
    );
  }
  return array;
});
</script>

<style>

</style>