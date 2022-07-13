<template>
  <div class="w-1/2 m-5">
      <UiInput />
      <UiButton :to="dd" :color='"bg-secondary"'/>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Home",
});
</script>