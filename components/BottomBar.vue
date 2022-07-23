<template>
    <div w="full" h="full" bg="gray-600" flex="~" items="center" justify="center">
        <div bg="hover:gray-900">
            <div flex="~ col">
                <div @click="app.toggleMinimize()" v-for="app in appsStore.getRunningApps" :key="'Bottom-Bar-' + app.title">
                    <div :class="app.icon"></div>
                    <span>{{app.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const appsStore = useStoreApps();
</script>