<template>
  <NuxtLayout name="global-two">
    <template #right>
      <UiMenu h="full" w="full">
        <UiMenuItem multiple listTitle="Option 1">
          <UiMenuItem icon="i-clarity-email-solid" title="Option 1.1" />
          <UiMenuItem icon="i-clarity-email-solid" title="Option 1.2" />
        </UiMenuItem>
        <UiMenuItem icon="i-clarity-email-solid" title="Option 2" />
        <UiMenuItem icon="i-clarity-email-solid" title="Option 3" />
      </UiMenu>
    </template>

    <template #left> Left </template>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: "Home",
});
</script>
