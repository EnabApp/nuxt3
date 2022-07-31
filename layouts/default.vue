<template>
  <div class="bg-default" :class="!online && 'grayscale'" transition="all ease-in-out duration-1000 delay-75" position="relative" h="screen" w="screen">
    <!-- <UiHeader :tabs="tabs" position="absolute" left="0" /> -->

    <slot />
  </div>
</template>

<script setup>
const online = useOnline()
</script>

<style scoped>
.bg-default {
  background-image: url('https://i0.wp.com/windowsloop.com/wp-content/uploads/2021/06/img0.jpg');
  /* background-image: url('imgs/bg.jpg'); */
  
  /* background-size: cover; */
  background-size: cover;
  /* background-position: 100% 180%; */

/* animation: lightMove 5s infinite; */
}
</style>
