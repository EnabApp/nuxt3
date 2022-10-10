<template>
    <div position="relative">
        <NuxtLink :to="`/boards/${space?.business?.id}/${space?.id}`" decoration="none" color="inherit" flex="~ col" rounded="xl" p="6" position="relative" z="hover:10" bg="secondary dark:secondaryOp dark:hover:opacity-50">
            <!-- Header -->
            <div flex="~" items="center" justify="between">
                <div text="2xl primaryOp dark:primary">
                    {{ space.name }}
                </div>
                <div flex="~ gap-1" text="tertiaryOp dark:tertiary" items="center">
                    <span text="xl">{{ space.boardsCount ?? 0 }}</span>
                    <IconBoards w="6" h="6" />
                </div>
            </div>


            <div my="3" overflow="hidden" line-clamp="3">
                {{ space.description }}
            </div>
            

            <div flex="~" justify="between" items="end" mt="2">
                <!-- Users -->
                <div flex="~" class="-space-x-3 space-x-reverse">
                    <UiToolTip text="عبدالملك بن سلمان">
                        <IconUser w="12" h="12" />
                    </UiToolTip>
                    <UiToolTip text="جورج قرداحي">
                        <IconUser w="12" h="12" />
                    </UiToolTip>
                    <div bg="tertiaryOp dark:tertiary" z="5" rounded="full" flex="~" items="center" justify="center" w="12" h="12">
                        <span font="medium" text="1rem primaryOp dark:primary">3+</span>
                    </div>
                </div>

                <!-- Things -->
                <div flex="~ gap-1">
                    <UiToolTip text="مالك العمل">
                        <IconUserCircle text="tertiaryOp dark:tertiary" w="6" h="6" />
                    </UiToolTip>
                    <UiToolTip text="مفعل">
                        <IconVerified text="green" w="6" h="6" />
                    </UiToolTip>
                </div>
            </div>
        </NuxtLink>

    </div>

</template>


<script setup>
const props = defineProps({
    space: {
        type: Object,
        required: true
    }
})
</script>