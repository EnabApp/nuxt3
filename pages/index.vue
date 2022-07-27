<template>
  <NuxtLayout name="desktop">
    <div position="absolute" @click="appsStore.setFocus('')" flex="~" w="full" h="full" items="center" justify="center">
      <div w="5xl xl:3xl md:3xl sm:xl" h="3xl xl:xl md:xl sm:xl" bg="b-5" border="~ b-5 rounded-2xl" grid="~ cols-2 2xl:cols-6 xl:cols-6 lg:cols-4 md:cols-4 sm:cols-3  auto-rows-min" p="8" place="center" ref="dropZoneRef">
        <!-- Show icons in desktop -->
        <UiDesktopIcon v-for="app in appsStore.getAll" :key="app.title" :app="app" />
      </div>
    </div>


    <!-- Registering Apps in the platform -->
    <ClientOnly>
      <Teleport to="#openedwindows">
        <!-- First Application and sub apps -->
        <AppSupermarket />
        <AppSupermarketAppsSecond />
        <AppServicesStore />

        <!-- Utilities -->
        <AppCalculator />
        <AppTodo />
      </Teleport>
    </ClientOnly>

    <!-- Widgets -->
    <div position="absolute" right="5" @click="appsStore.setFocus('')" flex="~" w="1/6" h="h-minus-bottombar" items="center" justify="center">
      <div w="full" overflow-y="scroll" h="minus-bottombar">
        <div p="y-4" flex="~ col gap-2">
          <!-- Supermarket Widgets -->
          <TransitionGroup>
            <WidgetsSupermarketFirst key="first" />
          </TransitionGroup>
        </div>
      </div>
    </div>
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


<style scoped>
/* CLOSE TRANSITION */
.v-enter-active {
  animation: bounce-in 0.3s;
}
.v-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>