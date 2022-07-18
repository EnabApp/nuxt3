<template>
  <div flex="~ col gap-1">
    <!-- Label -->
    <label
      v-if="label"
      class="font-medium text-gray-700 dark:text-gray-400"
      >{{ label }}</label
    >

    <!-- Main Input Components -->
    <div
      class="group"
      :class="{
        'focus-within:border-primary-500': !error,
        'focus-within:border-error-500': error,
      }"
      flex="~ gap-2"
      font="leading-tight"
      justify="between"
      p="x-2 y-0"
      text="gray-500 dark:gray-200"
      bg="white dark:w-10"
      border="~ 2 gray-300 dark:gray-600 rounded-lg"
      outline="none focus-within:none"
    >
      <div flex="~ gap-2 grow" items="center">
        <!-- Icon -->
        <div v-if="icon" :class="icon" text="gray-500 dark:gray-200"></div>
  
        <!-- Input -->
        <input
          v-model="modelValue"
          ref="inputRef"
          @input="(event) => $emit('update:modelValue', event.target.value)"
          :placeholder="placeholder"
          :type="type == 'password' ? statePassword : type"
          class="text-gray-700 border-0 dark:text-gray-400"
          p="y-2"
          bg="white dark:transparent"
          appearance="none"
          flex="grow"
          outline="none focus:none"
        />
      </div>

      <!-- Buttons -->
      <div id="buttons" flex="~ gap-1" items="center" p="b-0.5" m="1" overflow="y-hidden">
        <!-- Type password -->
        <div class="flex gap-1" v-if="type == 'password'">
          <button
            v-if="statePassword == 'password'"
            @click="showPassword()"
            text="gray-500 dark:gray-200"
            class="i-gridicons-not-visible"
          ></button>
          <button
            v-else
            @click="showPassword()"
            text="gray-700 dark:text-gray-50"
            class="i-gridicons-visible"
          ></button>
        </div>

        <!-- Incrementals -->
        <div flex="~ gap-1 col" v-if="type == 'number'">
          <button
            @click="increase()"
            text="gray-500 dark:gray-400"
            cursor="pointer"
            class="i-ep-arrow-up-bold"
          ></button>
          <button
            @click="decrease()"
            text="gray-500 dark:gray-400"
            cursor="pointer"
            class="i-ep-arrow-down-bold"
          ></button>
        </div>

        <!-- Alternative Buttons -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  icon: {
    type: String,
  },
  modelValue: {
    type: String,
  },
  error: {
    type: Boolean,
    default: false,
  },
  increment: {
    type: String,
    default: "1",
  }
});

const emit = defineEmits(["update:modelValue"]);

const inputRef = ref(null);


// Toggling Password View
const [statePassword, showPassword] = useToggle(props.type, {
  truthyValue: "password",
  falsyValue: "text",
});


const increase = () => {
  const inputValue = inputRef.value.value;
  inputRef.value.value = parseFloat(inputValue) + parseFloat(props.increment);
  emit("update:modelValue", inputRef.value.value);
};
const decrease = () => {
  const inputValue = inputRef.value.value;
  inputRef.value.value = parseFloat(inputValue) - parseFloat(props.increment);
  emit("update:modelValue", inputRef.value.value);
};



</script>


<style scoped>
#buttons::-webkit-scrollbar {
  width: 3px;
  height: 3px
}
 
/* #buttons::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} */
 
#buttons::-webkit-scrollbar-thumb {
  background-color: #bbb;
  /* outline: 1px solid slategrey; */
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
}
</style>