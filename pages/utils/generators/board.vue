<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <div flex="~ col" w="full" m="8" h="[calc(100vh-4rem)]">
        <div opacity="30 hover:100" text="center" transition="~ duration-200 delay-75 ease" bg="primary dark:primaryOp" z="30" ref="el" :style="style" style="position: fixed" flex="~ col gap-4" border="~ rounded-lg" w="200px" p="4">
            <h3>Controller</h3>
            <UiInput @keydown.enter="store.addUnit()" v-model="store.unitData.colSpan" placeholder="Column" />
            <UiInput @keydown.enter="store.addUnit()" v-model="store.unitData.rowSpan" placeholder="Row" />
            <UiButton @click="store.addUnit()">Insert</UiButton>
            <UiButton @click="toggleCode()">Toggle Code</UiButton>
        </div>
        <textarea w="[calc(100vh-4rem)]" h="[calc(100vh-4rem)]" bg="primary dark:primaryOp" text="primaryOp dark:primary" dir="ltr" v-if="stateCode" v-model="store.getCode" />
        <SpaceContainer v-else :fill="false" :space="store.getSpace" />
    </div>
</template>

<script setup>
const store = useGenerator()
const [stateCode, toggleCode] = useToggle(false)
// console.log(store.getSpace)

const el = ref(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 16, y: 16 },
})
</script>
