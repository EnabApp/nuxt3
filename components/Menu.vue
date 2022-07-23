<template>
    <div @click="toggle()">
        <div class="i-subway-menu"></div>
        <span>Menu</span>
    </div>

    <Teleport to="#openedwindows">
        <div v-if="state" left="0" top="0" p="6" bg="b-80" h="full" min-w="3xl" position="absolute">
                asd
        </div>
    </Teleport>
</template>

<script setup>

const [state, toggle] = useToggle(false);

</script>