<template>
    <div class="backdrop-blur-3xl" h="full" bg="b-50" flex="~" items="center" justify="center">
        <div flex="~ gap-2">
            <div @click="app.toggleMinimize()" v-for="app in appsStore.getRunningApps" :key="'Bottom-Bar-' + app.title">
                <div :class="app.icon"></div>
                <span>{{app.title}}</span>
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