<template>
    <div>
        <UiButton @click="newSpaceToggle()" color="secondary" size="md" icon="IconPlus">
            مساحة جديدة
        </UiButton>

        <Teleport to="body">
            <UiModal v-model="newSpaceState" @cancel="modalCanceled">
                <template #title>إنشاء عمل جديد</template>
                <div flex="~ col gap-4">
                    <span text="sm error dark:error" v-if="store.getCreateError">{{ store.getCreateError }}</span>
                    <UiInput v-model="store.spaceCreation.name" @keydown="() => store.createError = null" size="md" label="الأسم" />
                    <UiInput v-model="store.spaceCreation.description" size="md" label="الوصف" />
                    <UiButton @click="create()" size="md" my="2">انشاء</UiButton>
                </div>
            </UiModal>
        </Teleport>
    </div>
</template>

<script setup>
const store = useSpace()
const [newSpaceState, newSpaceToggle] = useToggle(false);

const modalCanceled = () => {
    newSpaceState.value = false;
};

// Has no spaces in this business
if (store.getSpaces?.length <= 0) newSpaceState.value = true
watch(() => newSpaceState.value, (newVal) => {
    if (store.getSpaces?.length <= 0) newSpaceState.value = true
})
const create = async () => {
    let result = await store.create()
    if (result) newSpaceToggle()
}
</script>