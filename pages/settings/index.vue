<template>
    <NuxtLayout name="user">
        <span>Hello World!</span>
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
