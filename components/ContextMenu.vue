<template>
    <div>
        <div @click.right="
            ($event) => {
                toggle(), getPosition(), clickedElement = $event;
            }
        ">
            <slot />
        </div>
        <Transition>
            <div class="backdrop-blur-lg" border="rounded-xl" ref="target" v-if="state" bg="b-60" p="4" w="48" h="content" position="fixed" :style="[`left: ${currentX}px`, `top: ${currentY}px`]" flex="~ col gap-2" z="250">
                <slot name="menu" />
                
                <UiMenuItem icon="i-akar-icons-copy" @click="copy()" title="نسخ" />
                <UiMenuItem icon="i-akar-icons-clipboard" title="لصق" />
            </div>
        </Transition>
    </div>
</template>

<script setup>
const { x, y, sourceType } = useMouse();

const currentX = ref(0);
const currentY = ref(0);

const getPosition = () => {
    currentX.value = x.value;
    currentY.value = y.value;
};

const [state, toggle] = useToggle(false);

const target = ref(null);

onClickOutside(target, (event) => (state.value = false));



// Functionality
const clickedElement = ref(null);

const copy = (event) => {
    let text = clickedElement.value.target.innerText || clickedElement.value.target.value;
    console.log(text)
};

</script>

<style scoped>
.v-enter-active {
  transition: all 0.075s ease-out;
}

.v-leave-active {
  transition: all 0.075s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scaleY(0.1);
}
</style>
