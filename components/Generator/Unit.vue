<template>
    <div flex="~ col gap-2" text="xs" p="4">
        <div flex="~ col gap-1" border="~ tertiaryOp dark:tertiary rounded-lg" p="y-0.5 x-2">
            <div flex="~" justify="between"><span>Order</span><span>{{ unit.order }}</span></div>
            <div flex="~" justify="between"><span>Columns</span><span>{{ unit.colSpan }}</span></div>
            <div flex="~" justify="between"><span>Rows</span><span>{{ unit.rowSpan }}</span></div>
        </div>
        <div flex="~" justify="between">
            <div flex="~ gap-1">
                <UiButton size="sm" @click="store.moveX(unit.id, 'right')"><IconArrowLeft transform="rotate(180 0 0)" w="3" /></UiButton>
                <UiButton size="sm" @click="store.moveX(unit.id, 'left')"><IconArrowLeft w="3" /></UiButton>
            </div>

            <span border="~ error rounded-lg" p="y-0.5 x-2" cursor="pointer" color="error" @click="store.removeUnit(unit.id)">Remove</span>
        </div>
        <div flex="~ col gap-1">
            <UiInput size="sm" v-model="unit.componentData.name" placeholder="Component Name" />
        </div>
        
        <!-- <UiButton @click="store.moveY(unit.id, 'up')"><IconArrowLeft transform="rotate(90 0 0)" w="5" /></UiButton> -->
        <!-- <UiButton @click="store.moveY(unit.id, 'down')"><IconArrowLeft transform="rotate(180 0 0)" w="5" /></UiButton> -->
    </div>
</template>

<script setup>
const store = useGenerator()
const props = defineProps(['unit', 'componentData'])
</script>
