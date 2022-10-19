<template>
    <NuxtLayout name="user">
        <span>Hello World!</span>
        {{ user }}
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const user = useSupabaseUser()
</script>