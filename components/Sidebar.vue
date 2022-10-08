<template>
    <div w="200px" border="l secondary dark:secondaryOp">
        <div flex="~ col gap-6" items="center" p="x-12 y-8" h="full">
            <div w="full">
                <IconUser2 w="full" h="full" />
            </div>
            <span flex="~" w="full" justify="center" bg="green-500" text="xl primaryOp dark:primary" rounded="2xl" p="2" font="bold">مجاني</span>

            <div my="4" w="full" border="~ secondary dark:secondaryOp"></div>

            <NuxtLink v-for="action in actions" :key="action.route" :to="action.route" w="full" cursor="pointer" aspect="square" rounded="lg" flex="~" items="center" justify="center" :class="[
                $route.path == action.route ? 'bg-secondary dark:bg-secondaryOp text-primaryOp dark:text-primary' : 'bg-primary dark:bg-primaryOp text-tertiaryOp dark:text-tertiary',
            ]">
                <component :is="action.icon" w="12" h="12" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const actions = [
    {
        name: 'boards',
        icon: 'IconBoards',
        route: '/'
    },
    {
        name: 'users',
        icon: 'IconBoards',
        route: '/users'
    },
    {
        name: 'time',
        icon: 'IconBoards',
        route: '/time'
    },
    {
        name: 'store',
        icon: 'IconBoards',
        route: '/store'
    },
    {
        name: 'settings',
        icon: 'IconSettingsInput',
        route: '/settings'
    },
    
]
</script>