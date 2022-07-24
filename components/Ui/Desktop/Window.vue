<template>
    <div border="rounded-lg" z="20" bg="b-70" shadow="2xl b-70" :style="[app.maximized ? 'left:0px;top:0px;' : `left:${x}px;top:${y}px;`]" style="position: fixed" :class="{ 'w-full min-w-7xl h-minus-bottombar': app.maximized }">
        <div flex="~" place="items-center" justify="center" :class="{ 'w-full min-w-7xl h-full': app.maximized }">
            <div flex="~ col" transition="all duration-300 delay-75 ease-in-out" :class="[app.maximized ? 'w-full min-w-7xl  h-minus-bottombar' : size]" h="full">
                <!-- Header -->
                <div border="rounded-t-lg" class="backdrop-blur-lg" ref="el" bg="w-10" flex="~ gap-4" place="items-center" justify="between" p="y-2 x-4" text="lg" font="medium">
                    <div flex="~ grow gap-2" items="center" text="w-90 dark:w-60">
                        <div :class="app.icon"></div>
                        <span>{{ title }}</span>
                    </div>

                    <div v-if="!app.maximized" flex="~ gap-2">
                        <div @click="nextSize()" text="2xl w-80 hover:error-600" cursor="pointer">
                            <div text="w-80 dark:w-40" class="i-bx-zoom-in hover:i-bxs-zoom-in"></div>
                        </div>
                        <div @click="prevSize()" text="2xl w-80 hover:error-600" cursor="pointer">
                            <div text="w-80 dark:w-40" class="i-bx-zoom-out hover:i-bxs-zoom-out"></div>
                        </div>
                    </div>

                    <div @click="app.toggleMinimize()" text="2xl w-80 hover:error-600" cursor="pointer">
                        <div text="w-80 dark:w-40" class="i-mdi-window-minimize"></div>
                    </div>
                    <div @click="app.toggleMaximize()" text="2xl w-80 hover:error-600" cursor="pointer">
                        <div text="w-80 dark:w-40" class="i-gg-maximize-alt"></div>
                    </div>

                    <div @click="app.running = false" text="2xl w-80 hover:error-600" cursor="pointer">
                        <div text="w-80 dark:w-40" class="i-carbon-close hover:i-carbon-close-filled"></div>
                    </div>
                </div>

                <!-- Content -->
                <div flex="grow" p="x-6 y-6" class="backdrop-blur-lg">
                    <slot />
                </div>

                <!-- Footer -->
                <div flex="~ gap-2" p="y-2" justify="center" bg="b-30" un-text="white" border="rounded-b-lg" class="backdrop-blur-lg">
                    asd
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    app: {
        type: Object,
        required: true,
    },
});

const el = ref(null);

const { x, y, style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
});

const {
    state: size,
    next: nextSize,
    prev: prevSize,
} = useCycleList(
    [
        "min-w-sm min-h-sm",
        "min-w-lg min-h-lg",
        "min-w-xl min-h-xl",
        "min-w-2xl min-h-2xl",
        "min-w-3xl min-h-3xl",
        "min-w-4xl min-h-4xl",
        "min-w-5xl min-h-5xl",
        "min-w-6xl min-h-6xl",
        "min-w-7xl min-h-7xl w-full",
    ],
    { initialValue: "min-w-2xl min-h-2xl" }
);
</script>
