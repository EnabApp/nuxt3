<template>
    <div flex="~">
        <Sidebar />
        <div flex="grow">
            <div flex="~ col" m="10"  h="[calc(100vh-5rem)]">
                <slot />
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
</script>
