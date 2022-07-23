<template>
    <div @click.right="toggle()" p="y-8 x-8" z="10">
    <div v-if="state" >
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
    </div>
        <slot />
    </div>
</template>

<script setup>
 const [state,toggle] = useToggle(false)
const route = useRoute();

useHead({
  meta: [
    {
      name: "og:title",
      content: route.meta.title ? `${route.meta.title} · Enab` : "Enab",
    },
  ],
});

</script>