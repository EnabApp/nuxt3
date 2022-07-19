<template>
<div flex="~ col gap-1">
    <!-- Nuxt Link Button -->
    <nuxt-link v-if="to" :to="to" :class="classes">
      <span v-if="title" class="text-gray-600 dark:text-w-80">{{title}}</span>
    </nuxt-link>

    <!-- Default Button -->
    <button v-else :class="classes" :disabled="disabled ? true : false">
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
  outline:{
    type: Boolean,
    default: false,
  },
  solid: { 
    type: Boolean, 
    default: false 
  },
  disabled:{
    type: Boolean, 
    default: false
  }
});

const classes = computed(() =>  {
  let array = [
    "py-2 px-4 m-3",
    "text-sm",
    "text-center",
    "rounded-lg",
  ];
  console.log(props.disabled)
  if(props.disabled){
    array.push("cursor-pointer");
  }
  if (props.solid) {
    switch (props.color) {
      case "success":
        array.push("text-white bg-success-500 hover:bg-success-600 dark:bg-success-600 dark:hover:bg-success-700 border border-success-200 dark:border-success-600");
        break;
        
      case "warning":
        array.push("text-white bg-warning-500 hover:bg-warning-600 dark:bg-warning-300 dark:hover:bg-warning-500 border border-warning-200 dark:border-warning-600");
      break;

      case "error":
        array.push("text-white bg-error-400 hover:bg-error-500 dark:bg-error-400 dark:hover:bg-error-500 border border-error-500 dark:border-error-700");
      break;

      case "slate":
        array.push("text-white bg-s-60 hover:bg-s-80 dark:bg-s-40 dark:hover:bg-s-60 border border-s-80 dark:border-s-80");
      break;

      default:
        array.push("text-white bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 border border-primary-200 dark:border-primary-400");
      break;
    }
  }else if(props.outline){
    switch (props.color) {
      case "success":
          array.push("text-success-400 hover:text-white bg-inherit hover:bg-success-500 dark:hover:bg-success-600 border border-success-500");
        break;
        
      case "warning":
        array.push("text-warning-400 hover:text-white bg-inherit hover:bg-warning-500 dark:hover:bg-warning-600 border border-warning-500 dark:border-warning-700");
      break;

      case "error":
        array.push("text-error-400 hover:text-white bg-inherit hover:bg-error-500 dark:hover:bg-error-600 border border-error-500 dark:border-error-700");
      break;

      case "slate":
        array.push("text-s-90 hover:text-white bg-inherit hover:bg-s-70 dark:hover:bg-s-60 border border-s-50");
      break;

      default:
        array.push("text-primary-600 dark:text-primary-300 hover:text-white bg-inherit hover:bg-primary-500 dark:hover:bg-primary-500 border border-primary-500 dark:border-primary-400");
      break;
    }
  }
  return array;
});
</script>

<style>

</style>