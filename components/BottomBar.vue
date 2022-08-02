<template>
    <!-- Main -->
    <div v-if="barState" w="full" h="60px" flex="~" justify="center" items="center" bg="primaryOp" z="200">

      <!-- Content -->
      <div h="46px" flex="~" items="center" w="full" m="x-70px">

        <!-- Icon -->
        <div>
          <UiIconsEnab h="45px" />
        </div>

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondaryOp" m="x-16px"></div>

        <!-- Search -->
        <div ref="searchEl" h="43px" flex="~ gap-2" p="x-13px" items="center" justify="center" bg="secondaryOp" un-text="secondary" border="rounded-10px">
          <div h="16px" w="16px" class="i-fa-search"></div>
          <input placeholder="بحث..." type="search" un-text="lg white" class="bg-transparent border-0 outline-none focus:outline-none" />
        </div>

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondaryOp" m="x-16px"></div>

        <!-- Applications -->
        <div flex="~ gap-7px grow">
          <TransitionGroup>
            <!-- Application loop -->
            <div v-for="app in appsStore.getRunningApps" :key="'bottom-bar-app-' + app.id" @click="minimizeApp(app)"  :class="[
              app.id == appsStore.focused ? 'text-white' : 'text-secondary hover:text-white'
            ]" cursor="pointer" p="x-15px" w="200px" h="43px" flex="~ gap-7px" items="center" justify="start" bg="secondaryOp" border="rounded-10px" transition="all 0.025s ease-in-out">
              <div h="16px" w="16px" :class="app.icon"></div>
              <span un-text="xl">
                {{ app.title }}
              </span>
            </div>
          </TransitionGroup>
        </div>

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondaryOp" m="x-16px"></div>

        <div flex="~ gap-24px" items="center" un-text="white" m="l-8px">
            <!-- Calendar -->
            <div h="32px" w="32px" class="i-bxs-calendar"></div>

            <!-- Datetime -->
            <div un-text="xl">2022 \ 8 \ 1 - 11:18</div>
        </div>

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondaryOp" m="x-16px"></div>
        
        <!-- Bottombar minimize -->
        <div un-text="white">
            <div cursor="pointer" @click="barToggle()" h="32px" w="32px" class="i-bi-arrow-down-right-square-fill"></div>
        </div>
      </div>

    </div>

    <!-- Floating Button -->
    <div ref="floatingButton" p="20px" position="absolute" left="0" bottom="0" :style="style" z="200" v-else>
      <div un-text="white" bg="secondaryOp" border="rounded-10px" w="60px" h="60px" flex="~" items="center" justify="center">
        <div @click="barToggle()" cursor="pointer" h="32px" w="32px" class="i-bi-arrow-up-right-square-fill"></div>
      </div>
    </div>
</template>

<script setup>
const today = new Date();
const date = computed(() => today.toLocaleDateString("ar-IQ"))

const appsStore = useStoreApps()

const online = useOnline()

const [barState, barToggle] = useToggle(false)


const floatingButton = ref(null)

const { x, y, style } = useDraggable(floatingButton, {
  // onEnd: () => console.log('hi')
})


///////////// Right
// Full Screen
const { isFullscreen, enter, exit, toggle: toggleFullScreen } = useFullscreen()

const minimizeApp = (app) => {
  if (app.minimized){
    appsStore.setFocus(app.id)
    app.minimized = !app.minimized
  }
  else {
    if (appsStore.focused == app.id){
      app.minimized = !app.minimized
      appsStore.setFocus(null)
    } else {
      appsStore.setFocus(app.id)
    }
  }

  // app.toggleMinimize()
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>