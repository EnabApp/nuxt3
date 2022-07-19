<template>
<div flex="~ col gap-1">
    <!-- Nuxt Link Button -->
    <nuxt-link v-if="to" :to="to" :class="classes" :activeClass="activeClass">
      <span v-if="title" class="text-gray-600 dark:text-w-80">{{title}}</span>
    </nuxt-link>

    <!-- Default Button -->
    <button v-else :class="classes" :disabled="disabled ? true : false">
      <span v-if="!loading">{{title}}</span>
      <svg v-else class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
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
    default:"Button",
  },
  outline:{
    type: Boolean,
    default: false,
  },
  disabled:{
    type: Boolean, 
    default: false
  },
  activeClass:{
    type: String,
  },
  loading:{
    type:Boolean,
    default:false,
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
  if(!props.disabled){
    array.push("cursor-pointer");
  }
  if (!props.outline) {
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

      case "light":
        array.push("text-black bg-w-90 hover:bg-w-80 dark:bg-w-90 dark:hover:bg-w-70 border border-w-40 dark:border-w-40");
      break;

      case "dark":
        array.push("text-white bg-b-90 hover:bg-b-80 dark:bg-b-90 dark:hover:bg-b-30 border border-b-20 dark:border-b-40");
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

      case "light":
        array.push("text-w-90 hover:text-black bg-inherit hover:bg-w-70 dark:hover:bg-w-80 border border-w-50");
      break;

      case "dark":
        array.push("text-b-90 hover:text-white bg-inherit hover:bg-b-70 dark:hover:bg-b-70 border border-b-50");
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