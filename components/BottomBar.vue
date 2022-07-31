<template>
<!-- class="backdrop-blur-3xl" -->
    <div h="full" flex="~" items="end">
        <!-- Right -->
          <!-- Full Screen -->
          <!-- <div @click="toggleFullScreen" cursor="pointer" flex="~" justify="center" :class="{ 'bg-b-20' : isFullscreen }" bg="hover:b-20" transition="~ .1s ease-in-out" border="rounded-lg" p="3" w="8" un-text="w-60 center">
              <div class="text-xl i-zondicons-screen-full"></div>
          </div> -->
        <div position="absolute" bottom="2.5" right="2.5">
          <div flex="~ gap-2" border="rounded-2xl" items="center" p="r-2">
            <span flex="~" :class="[ online ? 'bg-success' : 'bg-error ']" items="center" justify="center" p="y-2 x-4" class=" rounded-xl">
              Online
            </span>
          </div>
        </div>

        <!-- Middle Icons -->
        <div flex="~ grow" justify="center">
          <div flex="~ gap-1" bg="b-80" p="1" border="rounded-2xl" justify="center" items="center">
              <TransitionGroup>
                  <div @click="app.toggleMinimize()" v-for="app in appsStore.getRunningApps" :key="'Bottom-Bar-' + app.id" flex="~ col gap-1" position="relative" m="1" bg="hover:w-10" shadow="hover:b-90 hover:xl" class="group" :class="[
                      // app.running && !app.minimized ? 'bg-b-20' : '',
                      app.minimized
                        ? 'text-w-30'
                        : (appsStore.focused == app.id ? 'text-primary' : 'text-w-30'),
                    
                    ]" transition="~ .1s ease-in-out" border="rounded-lg" p="x-4 t-3 b-4" w="10"  items="center" justify="center" cursor="pointer">
                      <!-- Icon -->
                      <div class="text-4xl" :class="app.icon"></div>
                      <!-- Minibar -->
                      <div transition="all .1s ease-in-out" position="absolute" bottom="1" :class="[ 
                          app.running ? 'opacity-100' : 'opacity-0',
                          app.minimized ? 'bg-w-30' : 'bg-primary'
                        ]" :style="[ app.minimized ? 'width:20%' : 'width:40%' ]" h="0.75" border="rounded-xl"></div>

                      
                      <div class="invisible group-hover:visible" v-if="app.isSubAppsRunning()" position="absolute" flex="~" bottom="6" m="b-5" p="3" bg="b-50" border="rounded-lg">
                        <div @click.stop="subApp.toggleRunning()" v-for="subApp in app.subApps" :key="'bottom-bar-icon-' + app.id + '-' + subApp.id"  :class="[
                            subApp.minimized
                              ? 'text-w-30'
                              : (appsStore.focused == subApp.id ? 'text-primary' : 'text-w-30'),
                          
                          ]">
                          <div class="text-2xl" :class="subApp.icon"></div>
                        </div>
                      </div>
                  </div>
              </TransitionGroup>
          <BottomBarMenu />
          </div>
        </div>

        <!-- Left Icons / Date -->
        <!-- <div un-text="w-30 xl" m="l-8">{{date}}</div> -->
    </div>
</template>

<script setup>
const today = new Date();
const date = computed(() => today.toLocaleDateString("ar-IQ"))

const appsStore = useStoreApps()

const online = useOnline()


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