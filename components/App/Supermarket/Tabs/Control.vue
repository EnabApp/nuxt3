<template>
    <div bg="b-20" h="full">
      <div p="2">
        <UiTabGroup :col="true" :tabs="['الفئات', 'المنتجات']">
        <template #tab-1>
          <UiButton @click="firstWidget.state = !firstWidget.state" title="Toggle Widget" />
        </template>
        <template #tab-2>
          <h1>About</h1>
        </template>
        <template #tab-3>
          <h1>Contact</h1>
        </template>
    </UiTabGroup>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  }
})
const firstWidget = props.app.getWidget(1)
</script>