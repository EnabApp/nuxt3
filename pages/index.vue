<template>
  <NuxtLayout name="desktop">
    <div position="absolute" @click="appsStore.setFocus('')" flex="~" w="full" h="full" items="center" justify="center">
      <div w="5xl xl:3xl md:3xl sm:xl" h="3xl xl:xl md:xl sm:xl" bg="b-5" border="~ b-5 rounded-2xl" grid="~ cols-2 2xl:cols-5 xl:cols-6 lg:cols-4 md:cols-4 sm:cols-3  auto-rows-min" p="8" place="center" ref="dropZoneRef">
        <ClientOnly>
          <div v-for="component in appsStore.getOwned" :key="'app-' + component.id">
            <UiDesktopIcon :app="component" />

            <Teleport to="#openedwindows">
              <!-- Application -->
              <component :app="component" :is="`App${component.name}`"></component>

              <!-- Application Sub Applications -->
              <component v-for="subComponent in component?.subApps" :key="component.id + '-sub-' + subComponent.id" :app="subComponent" :is="`App${component.name}Apps${subComponent.name}`"></component>
            </Teleport>

            <!-- Application Widget -->
            <Teleport to='#widgets'>
              <TransitionGroup>
                <component v-for="widget in component?.widgets" :key="'widget-' + widget.id" :widget="widget" :is="`App${component.name}Widgets${widget.name}`"></component>
              </TransitionGroup>
            </Teleport>
          </div>
        </ClientOnly>
      </div>
    </div>


    
    <!-- Widgets -->
    <div position="absolute" right="5" @click="appsStore.setFocus('')" flex="~" w="1/6" h="h-minus-bottombar" items="center" justify="center">
      <div w="full" overflow-y="scroll" h="minus-bottombar">
        <div id="widgets" p="y-4" flex="~ col gap-2"></div>
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