<template>
  <!-- Application -->
  <ContextMenu>
    <Transition name="close-transition">
      <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
        <NuxtLayout name="global-one">
          <div h="full" flex="~ col" p="x-2">
            <!-- <div m="t-8">
              <UiInput />
            </div> -->
            <div m="y-2" p="4" h="full" flex="grow">
              <div flex="~" bg="w-10" border="rounded-lg" class="flex items-end w-full h-20 mb-6 text-right">
                <div :class="[
                  screen.length < 15
                    ? 'text-4xl'
                    : screen.length < 25
                      ? 'text-2xl'
                      : 'text-2xl',
                ]" class="w-full px-6 py-5 font-thin text-white">
                  {{ screen }}
                </div>
                <div class="p-1 m-1 border-0 rounded-lg hover:bg-w-10">
                  <div @click="historyToggle()" class="m-1 text-lg i-codicon:history text-w-100" cursor="pointer"></div>
                </div>
              </div>
              <div position="relative" text="w-10" w="full">
                <div v-if="historyState" bg="b-90 " z="20" border="rounded-lg" h="full" w="full" position="absolute">
                  <h2 class="m-10 text-center" text="w-100" v-if="screenHistory.length == 0">
                    لا توجد سجلات
                  </h2>
                  <div flex="~ col" class="justify-center">
                    <div class="overflow-y-auto h-70">
                      <div text="w-100" m="2" flex="~ col gap-2" v-for="h in screenHistory.reverse()" :key="h.history">
                        <div class="border-0 rounded-lg border-w-5 hover:bg-w-10">
                          <div m="3" text="xl w-50">
                            <h5>{{ " = " }} {{ h.history }}</h5>
                          </div>
                          <div m="3" text="2xl">
                            <h5>{{ h.result }}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div flex="~" class="justify-center">
                    <div class="p-1 border-0 rounded-lg hover:bg-w-10">
                      <div class="text-2xl border-2 border-transparent cursor-pointer i-ant-design:delete-outlined text-w-100 hover:border-gray-700" v-if="screenHistory.length > 0" @click="screenHistory = []"></div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-flow-row grid-cols-4 gap-1">
                  <div @click="Backspace('-')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    <div class="i-akar-icons:backspace-fill"></div>
                  </div>
                  <div @click="Clear('-')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    C
                  </div>
                  <div @click="Operation('-')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    +/-
                  </div>
                  <div @click="Operation('/')" class="flex items-center justify-center w-full h-16 text-4xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    ÷
                  </div>
                  <div @click="ButtonClicked('7')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    7
                  </div>
                  <div @click="ButtonClicked('8')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    8
                  </div>
                  <div @click="ButtonClicked('9')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    9
                  </div>
                  <div @click="Operation('*')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    x
                  </div>
                  <div @click="ButtonClicked('4')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    4
                  </div>
                  <div @click="ButtonClicked('5')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    5
                  </div>
                  <div @click="ButtonClicked('6')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    6
                  </div>
                  <div @click="Operation('-')" class="flex items-center justify-center w-full h-16 text-4xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    -
                  </div>
                  <div @click="ButtonClicked('1')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg hover:bg-w-5">
                    1
                  </div>
                  <div @click="ButtonClicked('2')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    2
                  </div>
                  <div @click="ButtonClicked('3')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    3
                  </div>
                  <div @click="Operation('+')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    +
                  </div>
                  <div @click="Operation('=')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer bg-primary hover:bg-primary-600 active:bg-primary-700">
                    =
                  </div>
                  <div @click="ButtonClicked('0')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer hover:bg-w-5">
                    0
                  </div>
                  <div @click="Operation('.')" class="flex items-center justify-center w-full h-16 text-2xl text-white bg-transparent rounded-lg cursor-pointer hover:bg-w-5">
                    .
                  </div>
                  <div @click="Operation('%')" class="flex items-center justify-center w-full h-16 text-2xl text-white rounded-lg cursor-pointer bg-w-10 hover:bg-w-5">
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NuxtLayout>
      </UiDesktopWindow>
    </Transition>
  </ContextMenu>
</template>

<script setup>
import { onKeyStroke } from "@vueuse/core";
import App from "~/classes/App";
const myApp = new App({
  title: "الحاسبة",
  icon: "i-ic-baseline-calculate",
  size: "min-w-md min-h-xl",
  maximizable: false,
  resizeable: false,
  utility: true,

  // zIndex: "30"
});

// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const app = computed(() => AppsStore.getApp(myApp));

//calculator

let screen = ref(0);
const screenHistory = ref([]);
const [historyState, historyToggle] = useToggle(false);

const ButtonClicked = (number) => {
  if (screen.value.length > 28) return;
  if (screen.value === 0) {
    screen.value = number;
  } else {
    screen.value += number;
  }
};
const Operation = (operation) => {
  let lastChar = screen.value.slice(-1);
  if (lastChar == operation) return;
  if (
    lastChar == "+" ||
    lastChar == "-" ||
    lastChar == "*" ||
    lastChar == "/"
  ) {
    screen.value = screen.value.slice(0, -1);
  }
  if (operation === "=" || operation === "Enter") {
    let history = screen.value.toString();
    screen.value = eval(screen.value).toString();
    screenHistory.value.push({
      history: history,
      result: screen.value,
    });
  } else if (operation === "%") {
    screen.value = (eval(screen.value) / 100).toString();
  } else {
    screen.value += operation;
  }
};
const Clear = () => {
  screen.value = 0;
};
const Backspace = () => {
  screen.value = screen.value.slice(0, -1);
};

//keyboard
onKeyStroke(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], (e) => {
  // e.ctrlKey
  // e.shiftKey
  // e.altKey
  if (screen.value.length > 20) return;
  if (screen.value === 0) {
    screen.value = e.key;
  } else {
    screen.value += e.key;
  }
  e.preventDefault();
});
onKeyStroke(["+", "-", "*", "/", ".", "%", "Enter"], (e) => {
  Operation(e.key);

  e.preventDefault();
});
onKeyStroke(["Backspace"], (e) => {
  Backspace();
  e.preventDefault();
});
onKeyStroke(["Delete"], (e) => {
  Clear();
  e.preventDefault();
});
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
