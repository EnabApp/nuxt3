<template>
<div flex="~ col gap-1">
    <!-- Nuxt Link Button -->
    <nuxt-link v-if="to" :to="to" :class="classes">
      <span  n v-if="title" class="text-gray-600 dark:text-w-80">{{title}}</span>
    </nuxt-link>

    <!-- Default Button -->
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
    "text-sm",
    "text-white",
    "text-center",
    "rounded-lg",
  ];
  if (props.solid) {
    switch (props.color) {
      case "success":
        array.push("text-white bg-success-200 hover:bg-success-500 border border-success-500");
        break;
        
      case "warning":
        array.push("text-white bg-warning-200 hover:bg-warning-500 border border-warning-500");
      break;

      case "error":
        array.push("text-white bg-error-200 hover:bg-error-500 border border-error-500");
      break;

      case "secondary":
        array.push("text-white bg-secondary-200 hover:bg-secondary-500 border border-secondary-500");
      break;
        
      default:
        array.push("text-white bg-primary-200 hover:bg-primary-500 border border-primary-500");
      break;
    }
  }else if(props.outline){
    switch (props.color) {
      case "success":
          array.push("text-success-400 hover:text-white bg-inherit hover:bg-success-500 border border-success-500");
        break;
        
      case "warning":
        array.push("text-warning-400 hover:text-white bg-inherit hover:bg-warning-500 border border-warning-500");
      break;

      case "error":
        array.push("text-error-400 hover:text-white bg-inherit hover:bg-error-500 border border-error-500");
      break;

      case "secondary":
        array.push("text-secondary-11 hover:text-white bg-inherit hover:bg-secondary-11 border border-secondary-11");
      break;
        
      default:
        array.push("text-primary-400 dark:text-white hover:text-white bg-inherit hover:bg-primary-500 dark:hover:bg-w-50 border border-primary-500 dark:border-w-40");
      break;
    }
  }
  return array;
});
</script>

<style>

</style>