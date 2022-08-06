<template>
  <div ref="notificationsEl" position="relative" un-text="primaryOp dark:primary">
    <!-- Icon -->
    <div @click="notificationsPanelToggle()" cursor="pointer" h="32px" w="32px" class="i-ci-notification"></div>

    <!-- Notifications Panel -->
    <Transition name="notifications-panel">
      <div v-if="notificationsPanelState" bg="primary dark:primaryOp" position="absolute" left="-16px" bottom="64px" border="~ secondary dark:secondaryOp rounded-10px">
        <div w="350px" h="750px" flex="~ col gap-20px" p="y-30px x-30px">
          <!-- Header - Title & Button -->
          <div flex="~" items="center" justify="between">
            <span un-text="xl">الإشعارات</span>
            <div cursor="pointer" class="i-bxs-trash-alt" un-text="error 2xl"></div>
          </div>

          <!-- Notifications List -->
          <div overflow="y-scroll" p="l-2" flex="~ col gap-20px">
            <!-- Loop Iterations -->
            <div v-for="item in 25" :key="item" flex="~ col gap-5px" cursor="pointer" p="10px" border="~ transparent hover:secondary dark:hover:secondaryOp rounded-5px">
              <div flex="~" justify="between" items="center">
                <!-- Right : Icon & Title -->
                <div flex="~ grow gap-2" justify="start" items="center">
                  <!-- Icon -->
                  <div h="32px" min-w="32px" max-w="32px" class="i-bxs-cart"></div>
                  <!-- Title -->
                  <span un-text="xl">لوحة التحكم</span>
                </div>

                <!-- Left : Time -->
                <div min-w="70px" max-w="70px">
                  <span un-text="sm secondaryOp dark:secondary">2022 \ 8 \ 1</span>
                </div>
              </div>
              <div mr="40px">
                <span un-text="sm secondaryOp dark:secondary">أليايت,سيت دو أيوسمود تيمبور</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { exit } from "@tauri-apps/api/process";
import { useToggle } from "@vueuse/core";
import { usePointerSwipe } from '@vueuse/core'


const [notificationsPanelState, notificationsPanelToggle] = useToggle(false);
const notificationsEl = ref(null);
onClickOutside(
  notificationsEl,
  (event) => (notificationsPanelState.value = false)
);



</script>

<style scoped>
.notifications-panel-enter-active {
  transition: all 0.15s ease-out;
}

.notifications-panel-leave-active {
  transition: all 0.15s ease-in;
}

.notifications-panel-enter-from,
.notifications-panel-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
