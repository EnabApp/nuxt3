<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <div flex="~ col gap-2" items="center" justify="center" w="full" m="8">
        <div v-for="hook in allHooks" :key="hook.hook" flex="~" p="2" justify="between" rounded="lg" bg="secondary dark:secondaryOp dark:hover:opacity-70" w="3xl">
            <span>{{ hook.hook }}</span>
            <span>{{ hook.hook.split(':').shift() }}</span>
            <div v-for="attr in hook?.data" :key="attr">
                <span>{{ attr }}</span>
            </div>
        </div>        
    </div>
</template>
  
<script setup>
</script>
  