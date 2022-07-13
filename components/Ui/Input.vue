<template>
  <div flex="~ col gap-1">
    <!-- Label -->
    <label
      v-if="label"
      class="font-medium text-gray-700 dark:text-gray-400"
      for="input"
      >{{ label }}</label
    >

    <!-- Main Input Components -->
    <!-- 
      focus-within:outline-none outline-none focus-within:bg-white group 
    -->
    <div
      class="group"
      :class="{
        'focus-within:border-primary-500': !error,
        'focus-within:border-error-500': error,
      }"
      flex="~ gap-2"
      font="leading-tight"
      place="items-center"
      p="x-2"
      text="gray-500 dark:gray-200"
      bg="white dark:secondary-700 focus-within:white"
      border="~ 2 gray-300 dark:gray-600 rounded-lg"
      outline="none focus-within:none"
    >
      <!-- Icon -->
      <div v-if="icon" :class="icon" text="gray-500 dark:gray-200"></div>

      <!-- Input -->
      <input
        v-model="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.value)"
        id="input"
        :placeholder="placeholder"
        :type="type == 'password' ? statePassword : type"
        p="y-2"
        font="sans"
        text="gray-700 dark:gray-400 placeholder:gray-400 dark:placeholder:gray-500"
        bg="white dark:secondary-700"
        border="~ 0"
        appearance="none"
        flex="grow"
        outline="none focus:none"
      />

      <!-- Buttons -->
      <div class="flex items-center gap-1">
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
});



// Toggling Password View
const [statePassword, showPassword] = useToggle(props.type, {
  truthyValue: "password",
  falsyValue: "text",
});
</script>
