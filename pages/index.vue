<template>
  <NuxtLayout name="desktop">
    <div grid="~ cols-12 rows-8 flow-col" ref="dropZoneRef">
      <!-- Show icons in desktop -->
      <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
    </div>


    <!-- Registering Apps in the platform -->
    <ClientOnly>
      <Teleport to="#openedwindows">
        <AppFirst />
      </Teleport>
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

const appsStore = useStoreApps();

const dropZoneRef = ref(null)

function onDrop(x) {
  console.log(x)
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)
</script>
