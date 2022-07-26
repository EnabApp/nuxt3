<template>

    <!-- Main Container -->
    <div @click="appsStore.setFocus(app.title)" shadow="2xl b-70" :style="[
        app.maximized ? 'left:0px;top:0px;' : `left:${x}px;top:${y}px;`,
        appsStore.focused == app.title
            ? app.maximized
                ? `z-index: 25;`
                : `z-index: 25; border-color: #389BF2; border-width: 4px; border-style: solid;`
            : pinned
                ? `z-index: 30`
                : `z-index: ${app.zIndex}`,
    
        'touch-action: none;',
    ]" style="position: fixed" :class="[app.maximized ? 'w-full h-minus-bottombar' : 'border-rounded-lg border-4 border-w-20']">

        <!-- Window Container -->
        <div flex="~" place="items-center" justify="center" :class="{ 'w-full h-minus-bottombar': app.maximized }">
            <div flex="~ col" transition="all .2s ease-in-out" :class="[
                app.maximized ? 'w-full h-minus-bottombar' : size + ' border-rounded-lg',
                app.solid ? 'bg-gray-800' : 'bg-b-70',
            ]">
                <!-- Header -->
                <UiDesktopWindowHeader 
                    :app="app"
                    :appsStore="appsStore"
                    
                    :pinned="pinned"
                    @on-pin="(s) => pinned = s"

                    @on-move="(pos) => { x = pos.x; y = pos.y; }"
                    @on-resize="(s) => { size = s; }"

                    :key="app.title"
                />

                <!-- Content -->
                <div flex="~ grow col" bg="b-20" class="backdrop-blur-lg">
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
    app: {
        type: Object,
        required: true,
    },
});

const x = ref(40);
const y = ref(40);

const size = ref(props.app.size);

const appsStore = useStoreApps();

const pinned = ref(false);

</script>
