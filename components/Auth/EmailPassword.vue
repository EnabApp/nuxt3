<template>
  <div flex="~ col gap-2">
    <!-- ?Email -->
    <UiInput size="lg" v-model="authStore.email" w="190px lg:270px 2xl:320px" placeholder="البريد الإلكتروني"
      type="email" icon="IconEmail" />

    <!-- ?Password -->
    <UiInput size="lg" v-model="authStore.password" w="190px lg:270px 2xl:320px" placeholder="كلمة المرور"
      type="password" icon="IconLock" />
  </div>
</template>

<script setup>
const authStore = useAuthStore();
</script>
