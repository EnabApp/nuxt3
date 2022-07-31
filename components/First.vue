<template>
  <!-- Application -->
    <Transition>
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
              <UiButton title="Toggle Sub App" @click="getApp.toggleRunning()" />
            </template>
            <template #tab-3>
              <h1>Contact</h1>
            </template>
          </UiTabGroup>
        </div>
      </UiDesktopWindow>
    </Transition>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true
  }
})
const getApp = props.app.getSubApp(3);

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