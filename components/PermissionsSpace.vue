<template>
    <div>
        <UiButton @click="modalToggle()" color="secondary" size="md" icon="IconUsers" />

        <Teleport to="body">
            <UiModal size="md" v-model="modalState" @cancel="modalCanceled">
                <template #title>الصلاحيات</template>
                <div flex="~ col gap-6">
                    <div flex="~ gap-4" mb="4">
                        <UiInput size="md" flex="grow" placeholder="إيميل الشخص، رقم هاتفه.." />
                        <UiButton w="110px" size="md" color="success">إضافة</UiButton>
                    </div>

                    <div v-for="item in 5" :key="item" flex="~" justify="between">
                        <div flex="~ gap-4" items="center">
                            <IconUser w="8" h="8" />
                            <span font="medium" text="lg primaryOp dark:primary">حسن حفيد ابن الوليد</span>
                        </div>

                        <UiDropdown z="20" w="110px" size="sm" :list="[
                          { id: 1, value: 'يمكنه الرؤية' },
                          { id: 2, value: 'يمكنه الرؤية' },
                          { id: 3, value: 'يمكنه الرؤية' },
                        ]">
                        </UiDropdown>
                    </div>

                </div>
            </UiModal>
        </Teleport>
    </div>
</template>


<script setup>
const store = useSpace()
const [modalState, modalToggle] = useToggle(false);

const modalCanceled = () => {
    modalState.value = false;
};
</script>