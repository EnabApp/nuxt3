<template>
    <div position="relative">
        <NuxtLink v-if="business" :to="`/boards/${business.id}`" decoration="none" color="inherit" flex="~ col" rounded="xl" p="6" position="relative" z="hover:10" bg="secondary dark:secondaryOp dark:hover:opacity-50">
            <!-- Header -->
            <div flex="~" items="center" justify="between">
                <div text="2xl primaryOp dark:primary">
                    {{ business.name }}
                </div>
                <UiToolTip text="عدد المساحات">
                    <div flex="~ gap-1" text="tertiaryOp dark:tertiary" items="center">
                        <span text="xl">{{ business.spacesCount ?? 0 }}</span>
                        <IconBoards w="6" h="6" />
                    </div>
                </UiToolTip>
            </div>
            <!-- Address -->
            <p text="lg">
                {{ business.address ?? 'لايوجد عنوان' }}
            </p>

            <div flex="~ gap-2">
                <span v-for="category in business.categories ?? 1" :key="category.id" font="medium" my="4" p="y-0.5 x-2" border="~ tertiaryOp dark:tertiary rounded-md">
                    {{ category.name ?? 'لايوجد تصنيف' }}
                </span>
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
                    <UiToolTip v-if="business.is_active" text="مفعل">
                        <IconVerified text="green" w="6" h="6" />
                    </UiToolTip>
                    <UiToolTip v-else text="غير مفعل">
                        <IconNotVerified text="red" w="6" h="6" />
                    </UiToolTip>
                </div>
            </div>
        </NuxtLink>
        <div v-else flex="~ col" rounded="xl" p="6" animate="pulse" bg="secondary dark:secondaryOp" h="150px">
            <div flex="~" items="center" justify="between">
                <div h="8" w="75%" bg="tertiaryOp dark:tertiary" rounded="xl"></div>
            </div>
        </div>
    </div>

</template>


<script setup>
const props = defineProps({
    business: {
        type: Object,
    }
})
console.log(props.business)
</script>