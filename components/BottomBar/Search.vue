<template>
    <div @click="searchPanelToggle" ref="searchEl" relative h="43px" flex="~ gap-2" p="x-13px" items="center" justify="center" bg="secondaryOp" un-text="secondary focus-within:white" border="rounded-10px">
        <div h="16px" w="16px" class="i-fa-search"></div>
        <input placeholder="بحث..." type="search" un-text="lg secondary focus:white" class="bg-transparent border-0 outline-none focus:outline-none" />
        <Transition name="search-panel">
            <div v-if="searchPanelState" position="absolute" w="full" p="4" bottom="15" bg="secondaryOp" border="rounded-10px">
                <div class="i-line-md-loading-loop"></div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
    const [searchPanelState, searchPanelToggle] = useToggle(false)
    const searchEl = ref(null)
    onClickOutside(searchEl, (event) => searchPanelState.value = false)
</script>

<style scoped>
.search-panel-enter-active {
  transition: all 0.15s ease-out;
}

.search-panel-leave-active {
  transition: all 0.15s ease-in;
}

.search-panel-enter-from,
.search-panel-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>