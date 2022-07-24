<template>
    <div ref="menuEl">
        <div cursor="pointer" flex="~ col gap-1" position="relative" bg="hover:b-20" :class="{ 'bg-b-20': state }" transition="~ .1s ease-in-out" border="rounded-lg" p="t-2 b-3 x-3" w="8" un-text="w-60" items="center" justify="center" @click="toggle()">
        <!-- <div class="text-2xl i-subway-menu"></div> -->
        <UiIconsEnab />
        <div transition="~ .1s ease-in-out" position="absolute" bottom="1" :class="{ 'opacity-0': !state, 'opacity-100': state }" bg="primary" h="0.75" w="40%" border="rounded-xl"></div>
    </div>

    <ClientOnly>
        <Teleport to="#openedwindows">
            <Transition>
                <div v-if="state" class="backdrop-blur-lg" border="rounded-lg" left="5" top="5" bg="b-60" h="92%" min-w="3xl" position="absolute">
                    <div h="full" flex="~ col">
                        <!-- Header -->
                        <div flex="~ col" items="center">
                            <div class="mt-10 text-4xl text-w-40">{{ formattedTime }}</div>
                            <div class="text-w-40">{{ formattedDate }}</div>
                        </div>

                        <!-- Content -->
                        <div flex="grow">
                            asd
                        </div>

                        <!-- Bottom -->
                        <div flex="~" items="center" justify="between" p="y-2 x-20" border="rounded-b-lg" bg="w-10">
                            <div>
                                <div>
                                    <div class="text-2xl i-fluent:power-20-regular text-w-100">
                                        <button @click="
                                            () => {
                                                powerToggle(), (menuState = false);
                                            }
                                        " class="w-10 h-10 rounded-full"></button>
                                    </div>
                                </div>

                                <div class="relative" v-if="powerState">
                                    <Transition>
                                        <div class="absolute backdrop-blur-lg bottom-15 left-135" border="rounded-xl" ref="target" bg="b-60" p="4" w="48" h="content" position="fixed" flex="~ col gap-2" z="250">
                                            <slot name="menu" />

                                            <UiMenuItem icon="i-akar-icons-copy" title="hjg" />
                                            <UiMenuItem icon="i-akar-icons-clipboard" title="gjg" />
                                        </div>
                                    </Transition>
                                </div>
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
import { useNow, useDateFormat } from "@vueuse/core";

const appsStore = useStoreApps();
const [menuState, menuToggle] = useToggle(false);
const [powerState, powerToggle] = useToggle(false);
const [state, toggle] = useToggle(false);
const formattedDate = useDateFormat(useNow(), "YYYY-MM-DD");
const formattedTime = useDateFormat(useNow(), "HH:mm:ss");
onKeyStroke(['Escape'], (e) => {
  // e.ctrlKey
  // e.shiftKey
  // e.altKey
    state.value=!state.value;
  e.preventDefault()
})
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
