<template>
    <!-- Main -->
    <div v-if="barState" w="full" h="60px" flex="~" justify="center" items="center" bg="primary dark:primaryOp" z="200">

      <!-- Content -->
      <div h="46px" flex="~" items="center" w="full" m="x-70px">

        <!-- Menu Icon -->
        <BottomBarMenu />

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondary dark:secondaryOp" m="x-16px"></div>

        <!-- Applications -->
        <div flex="~ gap-7px grow">
          <TransitionGroup>
            <!-- Application loop -->
            <div v-for="app in appsStore.getRunningApps" :key="'bottom-bar-app-' + app.id" @click="minimizeApp(app)"  :class="[
              app.id == appsStore.focused
              ? 'text-primaryOp dark:text-primary'
              : 'text-secondaryOp dark:text-secondary hover:text-primaryOp dark:hover:text-primary',
            ]" cursor="pointer" p="x-15px" w="200px" h="43px" flex="~ gap-7px" items="center" justify="start" bg="secondary dark:secondaryOp" border="rounded-5px" transition="all 0.025s ease-in-out">
              <!-- Application Icon -->
              <div h="16px" w="16px" :class="app.icon"></div>
              <!-- Application Title -->
              <span un-text="xl">
                {{ app.title }}
              </span>
            </div>
          </TransitionGroup>
        </div>

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondary dark:secondaryOp" m="x-16px"></div>

        <BottomBarDatetime />

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondary dark:secondaryOp" m="x-16px"></div>

        <!-- Notifications -->
        <BottomBarNotifications />

        <!-- Divider -->
        <div h="32px" w="1px" bg="secondary dark:secondaryOp" m="x-16px"></div>
        
        <!-- Bottombar minimize -->
        <div un-text="primaryOp dark:primary">
            <div cursor="pointer" @dblclick="barToggle()" h="32px" w="32px" class="i-bi-arrow-down-right-square-fill"></div>
        </div>
      </div>

    </div>

    <!-- Floating Button -->
    <div ref="floatingButton" v-else p="20px" position="fixed" left="0" bottom="0" :style="style" z="200">
      <div un-text="primaryOp dark:primary" bg="primary dark:primaryOp" border="rounded-10px" w="60px" h="60px" flex="~" items="center" justify="center">
        <div @dblclick="barToggle()" cursor="pointer" h="32px" w="32px" class="i-bi-arrow-up-right-square-fill"></div>
      </div>
    </div>
</template>

<script setup>
const today = new Date();
const date = computed(() => today.toLocaleDateString("ar-IQ"))

const appsStore = useStoreApps()

const { width, height } = useWindowSize()

const [barState, barToggle] = useToggle(true)
const floatingButton = ref(null)

const { x, y, style, position } = useDraggable(floatingButton, {
  initialValue: { x: 0, y: '100%' },
  stopPropagation: true,
  onEnd: () => {
    y.value = y.value > height.value/2 || y.value == '100%' ? '100%' : 0
    x.value = x.value > width.value/2 ? width.value - 100 : 0
  }
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