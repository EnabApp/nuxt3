<template>
    <div flex="~">
        <Sidebar />
        <div flex="grow">
            <div flex="~ col" m="8"  h="[calc(100vh-4rem)]">
                <slot />
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
</script>
