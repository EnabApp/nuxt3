<template>
  <div bg="gray-200 dark:secondary-700" p="1.5" border="rounded" flex="~ gap-1.5">
    <div
      v-for="item in list"
      @click="select(item)"
      :class="{
        'font-medium bg-white dark:bg-secondary-400 shadow shadow-gray-300 dark:shadow-gray-900 text-secondary-700 dark-text-secondary-800':
          item.id == selected.id,
        'text-secondary-500': !(item.id == selected.id)
      }"
      :key="item.id"
      text="xs"
      p="2"
      w="full"
      border="rounded"
      flex="~ gap-2"
      justify="center"
      items="center"
      cursor="pointer"
    >
      <div v-if="item.icon" :class="item.icon"></div>
      <span>{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
});

const selected = ref(props.list[0]);

const emit = defineEmits(["update:modelValue"]);

const select = (item) => {
  selected.value = item;
  emit("update:modelValue", item.id);
};
</script>
