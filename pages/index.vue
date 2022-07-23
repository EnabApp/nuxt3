<template>
  <NuxtLayout name="desktop">
    <div grid="~ cols-12 rows-8 flow-col">
     

    <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />


    
    <!-- Registering Apps in the platform -->
    <ClientOnly>
      <Teleport to="#openedwindows">

        <AppFirst />

      </Teleport>
    </ClientOnly>
      
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

const appsStore = useStoreApps();


</script>
