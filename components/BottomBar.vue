<template>
    <div class="backdrop-blur-3xl" h="full" bg="b-50" flex="~" items="center" justify="center">
        <div flex="~ gap-2">
            <div @click="app.toggleMinimize()" v-for="app in appsStore.getRunningApps" :key="'Bottom-Bar-' + app.title" flex="~ col gap-1" position="relative" bg="hover:b-20" :class="{ 'bg-b-20': app.running && !app.minimized, 'text-primary' : !app.minimized, 'text-w-30' : app.minimized }" transition="~ .1s ease-in-out" border="rounded-lg" p="t-2 b-3 x-3" w="8"  items="center" justify="center">
                <div class="text-2xl" :class="app.icon"></div>
                <div transition="all .1s ease-in-out" position="absolute" bottom="1" :class="[ app.running ? 'opacity-100' : 'opacity-0', app.minimized ? 'bg-w-30' : 'bg-primary' ]" :style="[ app.minimized ? 'width:20%' : 'width:40%' ]" h="0.75" border="rounded-xl"></div>
            </div>

            <div>
                <Menu />
            </div>
        </div>
    </div>
</template>

<script setup>
const appsStore = useStoreApps();
</script>