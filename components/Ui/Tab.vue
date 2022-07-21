<template>
    <div cursor="pointer" text="center"  font="medium" p="x-4 y-2" :class="[
        active
        ? 'bg-s-10 hover:bg-s-15 dark:bg-s-15 border border-s-10 dark:border-w-20'
        : 'bg-transparent border border-transparent',

        'text-b-60 hover:text-b-90 dark:text-w-60 dark:hover:text-white'
    ]" border="rounded-xl">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    }
})
</script>