<template>
  <NuxtLayout name="global-two">
    <template #right>
      <UiMenu>
        <UiMenuItem multiple title="Option 1">
          <UiMenuItem icon="i-clarity-email-solid"> Option 1.1 </UiMenuItem>
          <UiMenuItem icon="i-clarity-email-solid"> Option 1.2 </UiMenuItem>
          <UiMenuItem multiple title="Option 1.3">
            <UiMenuItem icon="i-clarity-email-solid"> Option 1.3.1 </UiMenuItem>
            <UiMenuItem icon="i-clarity-email-solid"> Option 1.3.2 </UiMenuItem>
            <UiMenuItem icon="i-clarity-email-solid"> Option 1.3.3 </UiMenuItem>
          </UiMenuItem>
        </UiMenuItem>
        <UiMenuItem icon="i-clarity-email-solid"> Option 2 </UiMenuItem>
        <UiMenuItem icon="i-clarity-email-solid"> Option 3 </UiMenuItem>
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
