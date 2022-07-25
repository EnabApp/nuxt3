<template>
    <div class="backdrop-blur-3xl" h="full" bg="b-60" border="t-4 w-10" flex="~" items="center" justify="between">
        <!-- Right -->
        <div flex="~ gap-2" m="r-8">

            <!-- Full Screen -->
            <div @click="toggleFullScreen" cursor="pointer" flex="~" justify="center" :class="{ 'bg-b-20' : isFullscreen }" bg="hover:b-20" transition="~ .1s ease-in-out" border="rounded-lg" p="3" w="8" un-text="w-60 center">
                <div class="text-xl i-zondicons-screen-full"></div>
            </div>

        </div>

        <!-- Middle Icons -->
        <div flex="~ gap-2 grow" justify="center" items="center">
            <TransitionGroup>
                <div @click="() => { app.toggleMinimize(), appsStore.setFocus(app.title)}" v-for="app in appsStore.getRunningApps" :key="'Bottom-Bar-' + app.title" flex="~ col gap-1" position="relative" bg="hover:b-20" :class="[
                    // app.running && !app.minimized ? 'bg-b-20' : '',
                    app.minimized
                      ? 'text-w-30'
                      : (appsStore.focused == app.title ? 'text-primary' : 'text-w-30'),
                   
                   ]" transition="~ .1s ease-in-out" border="rounded-lg" p="t-2 b-3 x-3" w="8"  items="center" justify="center" cursor="pointer">
                    <!-- Icon -->
                    <div class="text-2xl" :class="app.icon"></div>
                    <!-- Minibar -->
                    <div transition="all .1s ease-in-out" position="absolute" bottom="1" :class="[ 
                        app.running ? 'opacity-100' : 'opacity-0',
                        app.minimized ? 'bg-w-30' : 'bg-primary'
                      ]" :style="[ app.minimized ? 'width:20%' : 'width:40%' ]" h="0.75" border="rounded-xl"></div>
                </div>
            </TransitionGroup>
            
            <BottomBarMenu />

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

<style scoped>
.v-enter-active {
  animation: bounce-in 0.3s;
}
.v-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>