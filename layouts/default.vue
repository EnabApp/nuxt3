<template>
  <div>
    <slot />
  </div>
</template>


<script setup>
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}
  ::-webkit-scrollbar-track {
  background: rgba(0,0,0, 0); 
  border-radius: 1rem;

}
  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255, .3); 
    border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255, .5); 
}


</style>