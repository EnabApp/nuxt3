<template>
    <div flex="~" items="center" justify="center" h="screen" w="screen" bg="primary dark:primaryOp">
      <div position="relative" flex="~ col gap-2" items="center" justify="center" w="full" h="full">
        <span text="2rem md:2.5rem lg:3rem primaryOp dark:primary"
          font="medium" z="10">
          الصفحة غير موجودة
        </span>
        <p text="1rem center secondaryOp dark:secondary" w="250px" z="10">
          في حال كنت متأكدًا من وجود الصفحة، يرجى التواصل معنا
        </p>
        <span position="absolute" text="12rem md:20rem lg:40rem secondaryOp" font="black">404</span>
        <UiButton z="20" @click="$router.back()">رجوع</UiButton>
      </div>
    </div>
    <!-- <div>
    <button @click="handleError">
      Clear errors
    </button>
    <br />
    {{error}}
  </div> -->
</template>

<script setup>
const props = defineProps({
  error: Object,
});

console.log(props.error);
const handleError = () => clearError({ redirect: "/" });
</script>
