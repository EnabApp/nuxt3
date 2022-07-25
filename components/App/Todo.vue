<template>
  <!-- Application -->
  <ContextMenu>
    <Transition name="close-transition">
      <UiDesktopWindow
        v-if="app.running"
        v-show="!app.minimized"
        :app="app"
      >
            <div m="4" flex="~ col grow gap-4">
              <UiInput v-model="taskTitle" placeholder="مهمة جديدة" @keypress.enter="newTask()" />

              <UiTabGroup :col="false" :tabs="['جميع المهام', 'المهام المكتملة']">
              <template #tab-1>
                <div flex="~ col grow">
               
              <div max-h="2xl" m="y-8" border="rounded-lg" flex="~ col grow gap-2" p="l-2" overflow-y="scroll">
                  <div v-for="task in tasks" :key="task.title" bg="w-10" p="4" border="rounded-lg" un-text="w-50">
                    <div flex="~" items="center" justify="between">
                      <span>{{ task.title }}</span>
                      <div class="i-bi-check-circle-fill hover:text-w-70"></div>
                    </div>
                  </div>
              </div>
                </div>
              </template>
              <template #tab-2>
                <h1>About</h1>
              </template>
              <template #tab-3>
                <h1>Contact</h1>
              </template>
          </UiTabGroup>
              </div>
      </UiDesktopWindow>
    </Transition>
  </ContextMenu>
</template>

<script setup>
import App from "~/classes/App";
const myApp = new App({
  title: "المهام",
  icon: "i-ri-todo-fill",
  size: "min-w-xl min-h-3xl",
  maximizable: false,
  // zIndex: "30"
})

// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const app = computed(() => AppsStore.getApp(myApp));

///////////////////////////////
const taskTitle = ref('');
const tasks = ref([]);

const newTask = () => {
  tasks.value.push({
    title: taskTitle.value,
    completed: false,
    time: useDateFormat(useNow(), "YYYY-MM-DD"),
  })
  taskTitle.value = ''
};

</script>

<style scoped>
/* CLOSE TRANSITION */
.close-transition-enter-active {
  animation: bounce-in 0.3s;
}
.close-transition-leave-active {
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
