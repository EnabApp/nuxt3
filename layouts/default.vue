<template>
  <div class="bg-default" flex="~ col" position="relative" h="screen" w="screen">
    <div id="openedwindows"></div>
    <!-- class="backdrop-blur-2xl" -->
      <div flex="grow">
        <slot />
      </div>
  
      <!-- Bottom Bar -->
      <div w="full" h="16" z="200">
        <BottomBar />
      </div>
    
  </div>
</template>

<style scoped>
.bg-default {
  background-image: url('https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
  /* background-image: url('https://images.unsplash.com/photo-1635255224530-c8cdbad2f1e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'); */
  background-size: cover;
  /* background-position: 100% 180%; */

/* animation: lightMove 5s infinite; */
}
</style>
