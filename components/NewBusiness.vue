<template>
    <div>
        <UiButton @click="newBusinessToggle()" color="secondary" size="md" icon="IconPlus">
            عمل جديد
          </UiButton>

        <Teleport to="body">
          <UiModal v-model="newBusinessState" @cancel="modalCanceled">
            <template #title>إنشاء عمل جديد</template>
            <div flex="~ col gap-4">
              <span text="sm error dark:error" v-if="store.getCreateError">{{ store.getCreateError }}</span>
              <UiInput v-model="store.businessCreation.name" @keydown="() => store.createError = null" size="md" label="الأسم" />
              <UiInput v-model="store.businessCreation.description" @keydown="() => store.createError = null" size="md" label="الوصف" />
              <UiDropdown v-model="store.businessCreation.category_id" @keydown="() => store.createError = null" size="md" label="الفئة" :list="store.businessesCategories" />
              <UiButton @click="create()" size="md" icon="IconPlus" my="2">انشاء</UiButton>
            </div>
          </UiModal>
        </Teleport>

    </div>
</template>

<script setup>
const store = useBusiness()

const [newBusinessState, newBusinessToggle] = useToggle(false);

const modalCanceled = () => {
  newBusinessState.value = false;
};

const create = async () => {
  let result = await store.create()
  if (result) newBusinessToggle()
}
</script>