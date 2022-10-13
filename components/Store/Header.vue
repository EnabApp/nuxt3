<template>
    <div flex="~ gap-6">
        <NuxtLink v-for="category in store.getCategories" :key="category"
        :to="category.route"
        decoration="none"
        cursor="pointer"
        font="medium"
        un-text="1rem"
        :class="[
            category.route == $route.path
            ? 'text-green-400'
            : 'text-tertiaryOp dark:text-tertiary hover:text-secondaryOp hover:dark:text-secondary'
        ]"
        >
            {{ category.name }}
        </NuxtLink>
    </div>
</template>

<script setup>
const store = useStore()
</script>