<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" class="font-medium text-gray-700" for="input">{{label}}</label>
    <div class="flex items-center justify-between w-full gap-2 p-1 px-4 leading-tight text-gray-500 transition-all duration-200 ease-in-out delay-100 bg-white border-2 border-gray-300 rounded-lg focus-within:outline-none focus-within:bg-white focus-within:border-primary-600 focus-within:shadow-xl focus-within:shadow-primary-200">

      <div v-if="icon" class="text-lg text-gray-500" :class="icon"></div>
      
      <input id="input" class="py-2 text-gray-700 border-0 appearance-none grow focus:outline-none placeholder:text-gray-400" :placeholder="placeholder" :type="type == 'password' ? statePassword : type" />
      <div class="flex gap-1">
        <!-- Type password -->
        <div class="flex gap-1" v-if="type=='password'">
          <button v-if="statePassword=='password'" @click="showPassword()" class="text-gray-500 i-gridicons-not-visible"></button>
          <button v-else @click="showPassword()" class="text-gray-700 i-gridicons-visible"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  icon: {
    type: String,
    default: "",
    required: false,
  }
})

const [statePassword, showPassword] = useToggle(props.type, {
    truthyValue: 'password',
    falsyValue: 'text',
})

// const typeProperty = ref(props.type)
// const togglePassword = (() => typeProperty.value == 'password' ? typeProperty.value = 'text' : typeProperty.value = 'password')

</script>