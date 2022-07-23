<template>
  <NuxtLayout name="desktop">
    <div grid="~ cols-12 rows-8 flow-col">
     

      <UiDesktopIcon @click="toggle()" v-for="item in 20" :key="item" />


      <!-- Application -->
      <ClientOnly>
        <Teleport to="#openedwindows">
          <UiDesktopWindow v-if="state">
            Hello Bellow
          </UiDesktopWindow>
        </Teleport>
      </ClientOnly>
      
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

const [state, toggle] = useToggle(true);
</script>
