<template>
    <div ref="menuEl">
        <div cursor="pointer" flex="~ col gap-1" position="relative" bg="hover:w-10" :class="{ 'bg-b-20': state }" transition="~ .1s ease-in-out" border="rounded-lg" p="3" w="10" m="1" un-text="w-60" items="center" justify="center" @click="toggle()">
        <!-- <div class="text-2xl i-subway-menu"></div> -->
        <UiIconsEnab />
        <div transition="~ .1s ease-in-out" position="absolute" bottom="1" :class="{ 'opacity-0': !state, 'opacity-100': state }" bg="primary" h="0.75" w="40%" border="rounded-xl"></div>
    </div>
 
    <ClientOnly>
        <Teleport to="#openedwindows">
            <Transition>
                <div v-if="state" z="100" class="backdrop-blur-lg" border="rounded-lg" left="5" top="5" bg="b-60" h="97%" min-w="3xl" position="absolute">
                    <div h="full" flex="~ col">
                        <!-- Header -->
                        <div flex="~ col" items="center">
                            <div class="mt-10 text-4xl text-w-40">{{ formattedTime }}</div>
                            <div class="text-w-40">{{ formattedDate }}</div>
                        </div>

                        <!-- Content -->
                        <div flex="~ grow col gap-2" overflow-y="scroll" m="2" p="x-2">
                            <nuxt-img v-for="img in 10" :key="img" border="rounded-lg" w="190" src="https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png" />
                        </div>

                        <!-- Bottom -->
                        <div flex="~" items="center" justify="between" p="y-2 x-20" border="rounded-b-lg" bg="w-10">
                            <div>
                                <div v-if="isTauri" @click="closeApp" cursor="pointer" class="text-2xl i-fluent:power-20-regular text-w-100"></div>
                            </div>

                            <div>
                                <div>
                                    <button @click="
                                        () => {
                                            menuToggle(), (powerState = false);
                                        }
                                    " class="w-10 h-10 rounded-full">
                                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                                    </button>
                                </div>

                                <div class="relative" v-if="menuState">
                                    <Transition>
                                        <div class="absolute backdrop-blur-lg bottom-15 left-4" border="rounded-xl" ref="target" bg="b-60" p="4" w="48" h="content" position="fixed" flex="~ col gap-2" z="250">
                                            <slot name="menu" />

                                            <UiMenuItem icon="i-akar-icons-copy" title="نسخ" />
                                            <UiMenuItem icon="i-akar-icons-clipboard" title="لصق" />
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
    </div>
</template>

<script setup>
import { exit } from '@tauri-apps/api/process';
import { useNow, useDateFormat } from "@vueuse/core";

const appsStore = useStoreApps();
const [menuState, menuToggle] = useToggle(false);
const [state, toggle] = useToggle(false);
const formattedDate = useDateFormat(useNow(), "YYYY-MM-DD");
const formattedTime = useDateFormat(useNow(), "HH:mm:ss");
onKeyStroke(['Meta'], (e) => {
  // e.ctrlKey
  // e.shiftKey
  // e.altKey
  if (e.ctrlKey) state.value=!state.value;
  e.preventDefault();
  e.stopPropagation();
})

const isTauri = useTauri();

const closeApp = async () => await exit(1);

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
    transform: translateY(100px);
    opacity: 0;
}
</style>
