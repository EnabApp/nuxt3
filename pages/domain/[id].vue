<template>
    <NuxtLayout name="user">
        <span>Hello World! - {{ id }}</span>
    </NuxtLayout>
</template>

<script setup>
const { params } = useRoute();
const { id } = params;
</script>