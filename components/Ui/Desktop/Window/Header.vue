<template>
    <div @dblclick="app.toggleMaximize()" :class="{ 'border-rounded-t-lg': !app.maximized }" class="backdrop-blur-lg" ref="el" bg="w-10" flex="~ gap-4" place="items-center" justify="between" p="y-2 x-4" text="lg" font="medium">
        <div flex="~ grow gap-2" items="center" text="w-90 dark:w-60">
            <div :class="app.icon" class="text-2xl"></div>
            <span class="text-xl">{{ app.parentApp && app.parentApp + " - " }} {{ app.title }}</span>
        </div>

        <div @dblclick.stop="() => { }" @click.stop="togglePin()" cursor="pointer" :class="[pinned ? 'text-primary' : 'text-w-80']" class="w-4 h-4 i-carbon-pin-filled"></div>

        <div @dblclick.stop="() => { }" v-if="!app.maximized && app.resizeable" flex="~ gap-2" bg="b-20" p="2" border="rounded-lg" items="center">
            <div @click="prevSize()" cursor="pointer" text="w-80 dark:w-40" class="w-4 h-4 i-akar-icons-circle-minus-fill"></div>
            <div @click="nextSize()" cursor="pointer" text="w-80 dark:w-40" class="w-4 h-4 i-akar-icons-circle-plus-fill"></div>
        </div>

        <span @dblclick.stop="() => { }" @click="app.toggleMinimize()" flex="~" items="center" justify="center" p="0.5" cursor="pointer" class="w-3.5 h-3.5 text-gray-800 bg-gray-500 rounded-full group">
            <div class="invisible text-xs group-hover:visible i-fluent-arrow-minimize-24-filled"></div>
        </span>
        <span @dblclick.stop="() => { }" @click="app.toggleMaximize()" flex="~" items="center" justify="center" p="0.5" v-if="app.maximizable" cursor="pointer" class="w-3.5 h-3.5 rounded-full text-warning-800 bg-warning-500 group">
            <div class="invisible text-xs group-hover:visible i-fluent-arrow-maximize-24-filled"></div>
        </span>
        <span @dblclick.stop="() => { }" @click="app.toggleRunning()" flex="~" items="center" justify="center" p="0.5" cursor="pointer" class="w-3.5 h-3.5 text-red-800 bg-red-500 rounded-full group">
            <div class="invisible font-medium group-hover:visible i-gg-close"></div>
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    app: {
        type: Object,
        required: true,
    },
    appsStore: {
        type: Object,
        required: true,
    },
    pinned: {
        type: Boolean,
        required: true,
    }
})

const [statePin, togglePin] = useToggle(false);

const emit = defineEmits(["onPin", "onMove", "onResize"]);

// Pinned window
const pinned = computed(() => {
    let state = props.app.zIndex > 25 || statePin.value;
    emit("onPin", state);
    return state;
});

const el = ref(null);

const { x, y, style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
    onStart: () => {
        props.appsStore.setFocus(props.app.id);
    },
    onMove: () => {
        props.app.maximized = false;

        if (y.value < 0) {
            y.value = 0;
            props.app.toggleMaximize();
        }

        emit("onMove", { x: x.value, y: y.value });
    },
});

const {
    state: size,
    next: nextSize,
    prev: prevSize,
} = useCycleList(
    [
        "w-xl h-sm",
        "w-2xl h-lg",
        "w-3xl h-xl",
        "w-4xl h-2xl",
        "w-5xl h-3xl",
        "w-6xl h-4xl",
        "w-7xl h-5xl",
    ],
    { initialValue: props.app.size }
);
watch(() => size.value, (newSize) => emit("onResize", newSize))

</script>