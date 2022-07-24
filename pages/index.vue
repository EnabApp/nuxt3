<template>
  <NuxtLayout name="desktop">
    <div h="full">
      <div h="full" w="75%" grid="~ cols-13 auto-rows-min" p="8" place="center" ref="dropZoneRef">
        <!-- Show icons in desktop -->
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
      </div>
    </div>


    <!-- Registering Apps in the platform -->
    <ClientOnly>
      <Teleport to="#openedwindows">
        <AppFirst />
        <AppCalculator />
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
