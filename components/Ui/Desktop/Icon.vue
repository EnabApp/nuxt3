<template>
  <!-- Main -->
  <div @click.stop="open()" w="auto xl:15 md:15 sm:15" h="30 xl:15 md:15 sm:15" bg="b-80 " p="4 xl:6 sm:8" m="3" border="4 transparent rounded-lg active:success-500" flex="~ col" justify="center" items="center" un-text="w-70 hover:white active:white" transition="~ 0.2s all" cursor="pointer" transform="~ active:scale-110" position="relative">
    <!-- Icon -->
    <div v-if="app.locked== true" >
        <div class="absolute z-10 text-2xl i-bxs:lock-alt right-14 -bottom-1 "></div>
    </div>
    
    <div :class="app.icon" basis="2/3" w="full" h="full"></div>

    <!-- Icon Name -->
    <div un-text="xl" basis="1/3" class="overflow-hidden text-center truncate" flex="~" items="center">
      <span>{{ app.title }}</span>
      <!-- Minibar -->
    </div>

    <div v-if="app.running" transition="all .1s ease-in-out" position="absolute" w="25%" :class="app.minimized ? 'bg-w-30' :  'bg-success-500'" bottom="1" h="1" border="rounded-xl"></div>
    
  </div>

</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    default: "",
  },
})
const { $toast } = useNuxtApp();
const appsStore = useStoreApps();

const open= () => {
  if(props.app.locked) {
    $toast.error(
      'This app is locked !!'
    )
  }
  else {
    // Start app
    appsStore.openWindow(props.app);
  }
}

</script>
