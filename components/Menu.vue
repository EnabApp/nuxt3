<template>
    <div flex="~ col gap-1" position="relative" bg="hover:b-20" :class="{ 'bg-b-20': state }" transition="~ .1s ease-in-out" border="rounded-lg" p="t-2 b-3 x-3" w="8" un-text="w-60" items="center" justify="center" @click="toggle()">
        <!-- <div class="text-2xl i-subway-menu"></div> -->
        <nuxt-img src="imgs/enab.svg" />

        <div transition="~ .1s ease-in-out" position="absolute" bottom="1" :class="{ 'opacity-0': !state, 'opacity-100': state }" bg="w-30" h="0.75" w="40%" border="rounded-xl"></div>

    </div>

    <ClientOnly>
        <Teleport to="#openedwindows">
            <Transition>
                <div v-if="state" class="backdrop-blur-lg" border="rounded-lg" left="5" top="5" p="6" bg="b-60" h="88.5%" min-w="3xl" position="absolute">
                    asd
                </div>
            </Transition>
        </Teleport>
    </ClientOnly>
</template>

<script setup>
const [state, toggle] = useToggle(false);
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