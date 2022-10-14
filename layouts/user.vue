<template>
    <div flex="~">
        <Sidebar />
        <div flex="~ col" w="[calc(100vw-4rem-125px)]" m="8" h="[calc(100vh-4rem)]">
            <Header mb="4" />
            <slot />
        </div>
    </div>
</template>
  
<script setup>

</script>
