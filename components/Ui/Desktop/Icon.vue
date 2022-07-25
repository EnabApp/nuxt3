<template>
  <!-- Main -->
  <div  @click.stop="open()" w="30" h="30" bg="hover:w-40 active:w-40" p="2" border="rounded-lg" flex="~ col" justify="center" items="center" un-text="gray-900" transition="~ 0.2s all" cursor="pointer" transform="~ active:scale-115" position="relative" :class="{
    'border-success': app.running,
    'border-error': !app.running,
  }">
    <!-- Icon -->
    <div v-if="app.locked== true" >
        <div class="absolute z-10 text-2xl i-bxs:lock-alt right-14 -bottom-1 "></div>
    </div>
    
    <div :class="app.icon" basis="2/3" w="full" h="full"></div>

    <!-- Icon Name -->
    <div un-text="xl" basis="1/3" class="overflow-hidden text-center truncate" flex="~" items="center">
      <span>{{ app.title }}</span>
    </div>
    
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
