<template>
    <div @dblclick="app.toggleMaximize()" @click="appsStore.setFocus(app.title)" border="~ 2 transparent rounded-lg" bg="b-70" shadow="2xl b-70" :style="[
            app.maximized ? 'left:0px;top:0px;' : `left:${x}px;top:${y}px;`,
            appsStore.focused == app.title
            ? `z-index: 25; border-color: #389BF2; border-width: 2px; border-style: solid;` 
            : (pinned ? `z-index: 30` : `z-index: ${app.zIndex}`)

        
        ]" style="position: fixed" :class="[ 
        app.maximized && 'w-full min-w-7xl h-minus-bottombar',
     ]">
        <div flex="~" place="items-center" justify="center" :class="{ 'w-full min-w-7xl h-full': app.maximized }">
            <div flex="~ col" transition="all duration-300 delay-75 ease-in-out" :class="[app.maximized ? 'w-full min-w-7xl  h-minus-bottombar' : size]" h="full">
                <!-- Header -->
                <div border="rounded-t-lg" class="backdrop-blur-lg" ref="el" bg="w-10" flex="~ gap-4" place="items-center" justify="between" p="y-2 x-4" text="lg" font="medium">
                    <div flex="~ grow gap-2" items="center" text="w-90 dark:w-60">
                        <div :class="app.icon"></div>
                        <span>{{ title }}</span>
                    </div>

                    <div @click="togglePin()" cursor="pointer" :class="[ pinned ? 'text-primary' : 'text-w-80']" class="w-3.5 h-3.5 i-carbon-pin-filled"></div>


                    <div v-if="!app.maximized" flex="~ gap-2" bg="b-10" p="2" border="rounded-lg" items="center">
                        <div @click="prevSize()" cursor="pointer" text="w-80 dark:w-40" class="w-3.5 h-3.5 i-akar-icons-circle-minus-fill"></div>
                        <div @click="nextSize()" cursor="pointer" text="w-80 dark:w-40" class="w-3.5 h-3.5 i-akar-icons-circle-plus-fill"></div>
                    </div>



                    <span @click="app.toggleMinimize()" cursor="pointer" class="w-3.5 h-3.5 bg-gray-500 rounded-full"></span>
                    <span @click="app.toggleMaximize()" cursor="pointer" class="w-3.5 h-3.5 bg-warning-500 rounded-full"></span>
                    <span @click="app.running = false" cursor="pointer" class="w-3.5 h-3.5 bg-red-500 rounded-full"></span>
                </div>

                <!-- Content -->
                <div flex="~ grow col" class="backdrop-blur-lg">
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

const appsStore = useStoreApps();

const [ statePin, togglePin ] = useToggle(false);

// Pinned window
const pinned = computed(() => {
    return props.app.zIndex > 20 || statePin.value;
})


const el = ref(null);

const { x, y, style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
    onStart: () => {
        appsStore.setFocus(props.app.title)
    },
    onMove: () => {
        props.app.maximized = false;
    }
});

const {
    state: size,
    next: nextSize,
    prev: prevSize,
} = useCycleList(
    [
        "min-w-xl min-h-sm",
        "min-w-2xl min-h-lg",
        "min-w-3xl min-h-xl",
        "min-w-4xl min-h-2xl",
        "min-w-5xl min-h-3xl",
        "min-w-6xl min-h-4xl",
        "min-w-7xl min-h-5xl",
    ],
    { initialValue: props.app.size }
);
</script>
