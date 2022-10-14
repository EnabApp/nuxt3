<template>
  <NuxtLayout name="store">
    <div flex="~ gap-10 grow">
      I am board
    </div>
  </NuxtLayout>
</template>
    
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>