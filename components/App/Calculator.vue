<template>
  <!-- Application -->
  <ContextMenu>
    <Transition name="close-transition">
      <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
        <NuxtLayout name="global-one">
          <div h="full" flex="~ col" p="x-8">
            <!-- <div m="t-8">
              <UiInput />
            </div> -->
            <div m="y-8" p="6" h="full" flex="grow">
              <div bg="w-10" border="rounded-lg" class="w-full h-20 mb-3 flex items-end text-right">
                <div class="w-full py-5 px-6 text-4xl text-white font-thin">{{ screen }}</div>
              </div>
              <div bg="w-10" text="w-10" w="full">
                <div flex="~" w="full">
                  <div w="1/4">
                    <button @click="Backspace('-')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5  text-white  text-xl  ">
                      backspace
                    </button>
                  </div>
                  <div w="1/4">
                    <button @click="Clear('-')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white  text-xl ">C</button>
                  </div>
                  <div w="1/4">
                    <button @click="Operation('-')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white  text-xl ">+/-</button>
                  </div>
                  <div w="1/4">
                    <button @click="Operation('/')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-4xl ">÷</button>
                  </div>
                </div>
                <div flex="~" w="full">
                  <div w="1/4">
                    <button @click="ButtonClicked('7')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">7</button>
                  </div>
                  <div w="1/4">
                    <button @click="ButtonClicked('8')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">8</button>
                  </div>
                  <div w="1/4">
                    <button @click="ButtonClicked('9')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">9</button>
                  </div>
                  <div w="1/4">
                    <button @click="Operation('*')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">x</button>
                  </div>
                </div>
                <div flex="~" w="full">
                  <div w="1/4">
                    <button @click="ButtonClicked('4')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">4</button>
                  </div>
                  <div w="1/4">
                    <button @click="ButtonClicked('5')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">5</button>
                  </div>
                  <div w="1/4">
                    <button @click="ButtonClicked('6')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">6</button>
                  </div>
                  <div w="1/4">
                    <button @click="Operation('-')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-4xl ">-</button>
                  </div>
                </div>
                <div flex="~" w="full">
                  <div w="1/4">
                    <button @click="ButtonClicked('1')"
                      class="w-full h-16  bg-w-20 hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl ">1</button>
                  </div>
                  <div w="1/4">
                    <button @click="ButtonClicked('2')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl ">2</button>
                  </div>
                  <div w="1/4">
                    <button @click="ButtonClicked('3')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl ">3</button>
                  </div>
                  <div w="1/4">
                    <button @click="Operation('+')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-2xl ">+</button>
                  </div>
                </div>
                <div flex="~" w="full">
                  <div class="w-1/4">
                    <button @click="ButtonClicked('0')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl ">0</button>
                  </div>
                  <div class="w-1/4">
                    <button @click="Operation('.')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl ">.</button>
                  </div>
                  <div class="w-1/4">
                    <button @click="Operation('=')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none  hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl ">=</button>
                  </div>
                  <div class="w-1/4">
                    <button @click="Operation('%')"
                      class="w-full h-16 outline-none cursor-pointer bg-w-20 focus:outline-none  hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl ">%</button>
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
import { onKeyStroke } from '@vueuse/core'
import App from "~/classes/App";
const myApp = new App({
  title: "الحاسبة",
  icon: "i-ic-baseline-calculate",
  size: "min-w-2xl min-h-3xl",
  maximizable: false,
  resizeable: false,
  utility: true,

  // zIndex: "30"
})

// Register to AppsStore
const AppsStore = useStoreApps();
AppsStore.register(myApp);

// Gathering Information
const app = computed(() => AppsStore.getApp(myApp));

//calculator

let screen = ref(0)
const ButtonClicked = (number) => {
  if (screen.value.length > 20) return
  if (screen.value === 0) {
    screen.value = number
  }
  else {
    screen.value += number
  }
}
const Operation = (operation) => {
  if (screen.value.slice(-1) == operation) return
  if (operation === '=') {
    screen.value = eval(screen.value)
  }
  else if (operation === '%') {
    screen.value = eval(screen.value) / 100
  }
  else {
    screen.value += operation
  }
}
const Clear = () => {
  screen.value = 0
}
const Backspace = () => {
  screen.value = screen.value.slice(0, -1)
}

//keyboard
onKeyStroke(['1','2','3','4','5','6','7','8','9','0'], (e) => {
  // e.ctrlKey
  // e.shiftKey
  // e.altKey
  screen.value += e.key
  appsStore.closeWindow();
  e.preventDefault()
  // if(e.key === '='){
  //   screen.value = eval(screen.value)
  // }else if(e.key === '%'){
  //   screen.value = eval(screen.value) / 100
  // }
  appsStore.closeWindow();
  e.preventDefault()
})
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
