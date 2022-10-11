<template>
    <div flex="~">
        <Sidebar />
        <div flex="~ col" w="full" m="8" h="[calc(100vh-4rem)]">
            <Header mb="4" />
            <slot />
        </div>
    </div>
</template>
  
<script setup>

</script>
