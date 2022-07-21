<template>
    <div :class="{'mt-2' : !col}" w="full" h="full">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    col: {
        type: Boolean,
        default: false
    }
});
</script>
