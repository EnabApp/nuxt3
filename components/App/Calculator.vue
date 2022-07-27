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
              <div flex="~" bg="w-10" border="rounded-lg" class="w-full h-20 mb-6 flex items-end text-right">
                <div :class="[
                screen.length < 15 ? 'text-4xl'  : (screen.length<25 ? 'text-2xl' : 'text-xl')
                ]" class="w-full py-5 px-6  text-white font-thin">{{ screen }}</div>
                <div @click="historyToggle()" class="i-codicon:history text-w-100 text-lg m-1" cursor="pointer" ></div>
              </div>
              <div position="relative" text="w-10" w="full">
                <div  v-if="historyState" bg="gray-700 " z="20" border="rounded-lg" h="full" w="full" position="absolute">
                      <div  flex="~ col" class="  content-between ">
                            <h2  v-if="screenHistory.length == 0">
                              لا توجد سجلات
                            </h2>
                            <div class=" overflow-y-auto h-70 ">
                                <div   text="w-100" m="2" flex="~ col gap-2" v-for="h in  screenHistory.reverse() " :key="h.history">
                                  <div flex="~" class=" justify-between">
                                  <div>
                                    <h5 >{{ h.history }}</h5>
                                  </div>
                                  <div>
                                    <h5 > {{  h.result }}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div  class="i-ant-design:delete-outlined text-2xl text-w-100 cursor-pointer hover:border-gray-700 border-transparent border-2" v-if="screenHistory.length > 0" @click="screenHistory =[]"></div>
                      </div>
                </div>
                <div class="grid grid-cols-4 grid-flow-row ">
                    <button @click="Backspace('-')"
                      class="flex items-center justify-center w-full border-b-40 hover:border-0 rounded-lg  h-16  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5  text-white  text-xl  ">
                      <div class="i-akar-icons:backspace-fill"></div>
                    </button>
                    <button @click="Clear('-')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white  text-xl ">C</button>
                    <button @click="Operation('-')"
                      class="w-full h-16 border-b-40 hover:border-0  rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white  text-xl ">+/-</button>
                    <button @click="Operation('/')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-4xl ">÷</button>
                    <button @click="ButtonClicked('7')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">7</button>
                    <button @click="ButtonClicked('8')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">8</button>
                    <button @click="ButtonClicked('9')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">9</button>
                    <button @click="Operation('*')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">x</button>
                    <button @click="ButtonClicked('4')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">4</button>
                    <button @click="ButtonClicked('5')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">5</button>
                    <button @click="ButtonClicked('6')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">6</button>
                    <button @click="Operation('-')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none hover:bg-w-5 text-white text-4xl ">-</button>
                    <button @click="ButtonClicked('1')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg   bg-w-20 bg-w-20 focus:outline-none hover:bg-w-5 text-white text-xl ">1</button>
                    <button @click="ButtonClicked('2')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none bg-w-20  hover:bg-w-5 text-white text-xl ">2</button>
                    <button @click="ButtonClicked('3')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none bg-w-20  hover:bg-w-5 text-white text-xl ">3</button>
                    <button @click="Operation('+')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none bg-w-20  hover:bg-w-5 text-white text-2xl ">+</button>
                    <button @click="ButtonClicked('0')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none bg-w-20  hover:bg-w-5 text-white text-xl ">0</button>
                    <button @click="Operation('.')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none bg-w-20  hover:bg-w-5 text-white text-xl ">.</button>
                    <button @click="Operation('=')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none  bg-w-20  hover:bg-w-5 text-white text-xl ">=</button>
                    <button @click="Operation('%')"
                      class="w-full h-16 border-b-40 hover:border-0 rounded-lg  outline-none cursor-pointer bg-w-20 focus:outline-none  bg-w-20  hover:bg-w-5 text-white text-xl ">%</button>
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
  size: "min-w-md min-h-xl",
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
const screenHistory = ref([])
const [historyState, historyToggle] = useToggle(false)

const ButtonClicked = (number) => {
   if (screen.value.length > 28) return
  if (screen.value === 0) {
    screen.value = number
  }
  else {
    screen.value += number
  }
}
const Operation = (operation) => {
  let lastChar = screen.value.slice(-1)
  if (lastChar == operation) return
  if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
    screen.value = screen.value.slice(0, -1)
    
  }
  if (operation === '=' || operation === 'Enter') {
    let history = screen.value.toString()
    screen.value = (eval(screen.value)).toString()
    screenHistory.value.push({
      history: history,
      result: screen.value
    })
  }
  
  else if (operation === '%') {
    screen.value = (eval(screen.value) / 100).toString()
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
  if (screen.value.length > 20) return
  if (screen.value === 0) {
    screen.value = e.key
  }
  else {
    screen.value += e.key
  }
  e.preventDefault()
  
  
})
onKeyStroke(['+','-','*','/','.','%','Enter'], (e) => {
  
    Operation(e.key)
  
  e.preventDefault()
})
onKeyStroke(['Backspace'], (e) => {
  Backspace()
  e.preventDefault()
})
onKeyStroke(['Delete'], (e) => {
  Clear()
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
