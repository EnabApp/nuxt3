<template>
  <NuxtLayout name="desktop">
    <div h="full">
      <div h="full" w="75%" grid="~ cols-10 auto-rows-min gap-8" p="8" place="center" ref="dropZoneRef">
        <!-- Show icons in desktop -->
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
      </div>
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
