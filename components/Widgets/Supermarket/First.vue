<template>
    <div v-if="widget.state" w="full" border="rounded-lg">
        <div>
            <!-- Header -->
            <div flex="~" justify="between" items="center" border="rounded-t-lg" un-text="xl w-70" font="medium" p="3" bg="gray-900 opacity-70">
                <span>Header Title</span>
                <div class="i-bxs-cart" un-text="2xl"></div>
            </div>
            <div border="rounded-b-lg" p="3" bg="gray-900 opacity-30">
                Content
            </div>
            <!-- Content -->
        </div>
    </div>
</template>

<script setup>
import Widget from "~/classes/Widget"
const widgetId = 1;
const appsStore = useStoreApps()

const widget = ref(new Widget())

watch (() => appsStore.getApp("سوبر ماركت"), (app) => widget.value = app.getWidget(widgetId) )


</script>