<template>
    <div flex="~ gap-6">
        <NuxtLink to="/store" decoration="none" cursor="pointer" font="medium" un-text="1rem" :class="[
            '/store' == $route.path
            ? 'text-green-400'
            : 'text-tertiaryOp dark:text-tertiary hover:text-secondaryOp hover:dark:text-secondary'
        ]">
            الصفحة الرئيسية
        </NuxtLink>
        
        <NuxtLink v-for="category in store.getCategories" :key="category" :to="`/store/${category.id}`" decoration="none" cursor="pointer" font="medium" un-text="1rem" :class="[
            `/store/${category.id}` == $route.path
            ? 'text-green-400'
            : 'text-tertiaryOp dark:text-tertiary hover:text-secondaryOp hover:dark:text-secondary'
        ]">
            {{ category.name }}
        </NuxtLink>
    </div>
</template>

<script setup>
const store = useStore()
</script>