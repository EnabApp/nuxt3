<template>
    <div class="backdrop-blur-3xl" h="full" bg="b-50" flex="~" items="center" justify="between">
        <!-- Right -->
        <div flex="~ gap-2" m="r-8">

            <!-- Full Screen -->
            <div @click="toggleFullScreen" cursor="pointer" flex="~" justify="center" :class="{ 'bg-b-20' : isFullscreen }" bg="hover:b-20" transition="~ .1s ease-in-out" border="rounded-lg" p="3" w="8" un-text="w-60 center">
                <div class="text-xl i-zondicons-screen-full"></div>
            </div>

        </div>

        <!-- Middle Icons -->
        <div flex="~ gap-2 grow" justify="center" items="center">
            <div @click="app.toggleMinimize()" v-for="app in appsStore.getRunningApps" :key="'Bottom-Bar-' + app.title" flex="~ col gap-1" position="relative" bg="hover:b-20" :class="{ 'bg-b-20': app.running && !app.minimized, 'text-primary' : !app.minimized, 'text-w-30' : app.minimized }" transition="~ .1s ease-in-out" border="rounded-lg" p="t-2 b-3 x-3" w="8"  items="center" justify="center" cursor="pointer">
                <div class="text-2xl" :class="app.icon"></div>
                <div transition="all .1s ease-in-out" position="absolute" bottom="1" :class="[ app.running ? 'opacity-100' : 'opacity-0', app.minimized ? 'bg-w-30' : 'bg-primary' ]" :style="[ app.minimized ? 'width:20%' : 'width:40%' ]" h="0.75" border="rounded-xl"></div>
            </div>

            <div>
                <Menu />
            </div>
        </div>

        <!-- Left Icons / Date -->
        <div un-text="w-30 xl" m="l-8">{{date}}</div>

    </div>
</template>

<script setup>
const appsStore = useStoreApps();

const today = new Date();
const date = computed(() => today.toLocaleDateString("ar-IQ"))


///////////// Right
// Full Screen
const { isFullscreen, enter, exit, toggle: toggleFullScreen } = useFullscreen()
</script>