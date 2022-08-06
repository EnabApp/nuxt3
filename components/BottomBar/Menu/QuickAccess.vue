<template>
    <div m="y-24px" un-text="white">
        <span un-text="primaryOp dark:primary">الوصول السريع</span>
    </div>
    <div grid="~ cols-5 auto-rows-min" min-h="300px">

        <UiDesktopMiniIcon v-for="component in apps" :key="'app-' + component.id" :app="component" />

        <UiDesktopMiniIcon v-for="component in (10 - apps.length)" :key="'skeleton-' + component.id" />

    </div>
</template>

<script setup>
const props = defineProps({
    apps: Array
})

</script>