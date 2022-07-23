<template>
    <div ref="el" bg="primary" :style="style" style="position: fixed">
        <div flex="~" place="items-center" justify="center" backdrop="~ blur-lg" m="5">
            <div flex="~ col gap-2" h="full" max-w="2xl" min-w="2xl" max-h="xl">
                <!-- Header -->
                <div flex="~ gap-4" place="items-center" justify="between" p="x-2 y-2" text="2xl" font="medium">
                    <div flex="grow" text="w-80 dark:w-40">
                        <span>{{ title }}</span>
                    </div>
                    <div @click="app.running = false" text="3xl w-80 hover:error-600" cursor="pointer">
                        <div text="w-80 dark:w-40" class="i-carbon-close hover:i-carbon-close-filled"></div>
                    </div>
                </div>

                <!-- Content -->
                <div flex="grow" p="x-6 y-6" bg=" b-15 dark:w-5" border="rounded-lg">
                    <slot />
                </div>

                <!-- Footer -->
                <div flex="~ gap-2" justify="center" m="t-4">
                    asd
                </div>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    app: {
        type: Object,
        required: true
    }
})

const el = ref<HTMLElement | null>(null)

const { x, y, style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
})
</script>


