<template>
    <div flex="~ col gap-1" position="relative" bg="hover:b-20" :class="{ 'bg-b-20': state }"
        transition="~ .1s ease-in-out" border="rounded-lg" p="t-2 b-3 x-3" w="8" un-text="w-60" items="center"
        justify="center" @click="toggle()">
        <!-- <div class="text-2xl i-subway-menu"></div> -->
        <nuxt-img src="imgs/enab.svg" />

        <div transition="~ .1s ease-in-out" position="absolute" bottom="1"
            :class="{ 'opacity-0': !state, 'opacity-100': state }" bg="w-30" h="0.75" w="40%" border="rounded-xl"></div>

    </div>

    <ClientOnly>
        <Teleport to="#openedwindows">
            <Transition>
                <div v-if="!state" class="backdrop-blur-lg" border="rounded-lg" left="5" top="5"  bg="b-60"
                    h="88.5%" min-w="3xl" position="absolute">
                    <div class="flex flex-col space-y-164 ">
                            <div flex="~ col " items="center">
                                <div class="text-4xl mt-10 text-w-40">{{formattedTime}}</div>
                                <div class="text-w-40" >{{formattedDate}}</div>
                            </div>
                            <div flex="~" class="  justify-between items-center bg-w-10  rounded-b-lg p-2 px-20">
                                <div class="i-fluent:power-20-regular text-w-100 text-2xl"></div>
                                <div class=" relative">
                                    <div>
                                        <button @click="f" class="rounded-full w-10 h-10">
                                            <img class="w-10 h-10 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
                                        </button>
                                    </div>
                                    
                                    <!-- <div class="absolute top-0 left-0 right-0 bottom-0" bg="w-10" h="0.5" w="100%" border="rounded-lg"></div> -->
                                    <div>
                                    <Transition>
                                        <div class="backdrop-blur-lg" border="rounded-xl" ref="target" v-if="menuState"
                                            bg="b-60" p="4" w="48" h="content" 
                                            flex="~ col gap-2"
                                            z="250">
                                            <slot name="menu" />

                                            <UiMenuItem icon="i-akar-icons-copy"  title="نسخ" />
                                            <UiMenuItem icon="i-akar-icons-clipboard"  title="لصق" />
                                        </div>
                                    </Transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Transition>
        </Teleport>
    </ClientOnly>
</template>

<script setup>
import { ref, computed } from 'vue-demi'
import { useNow, useDateFormat } from '@vueuse/core'

const appsStore = useStoreApps();
const [menuState, menuToggle] = useToggle(false);
const [state, toggle] = useToggle(false);
const formattedDate = useDateFormat(useNow(), 'YYYY-MM-DD')
const formattedTime = useDateFormat(useNow(), 'HH:mm:ss')
const f = () => {
    console.log('f')
}


</script>

<style scoped>
.v-enter-active {
    transition: all 0.15s ease-out;
}

.v-leave-active {
    transition: all 0.15s ease-in;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

</style>