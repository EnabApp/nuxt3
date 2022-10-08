<template>
    <div w="175px" border="l secondary dark:secondaryOp">
        <div flex="~ col" h="full" justify="between" p="x-10">
            <div flex="~ col gap-6" pt="10" items="center">
                <div w="full">
                    <IconUser2 w="full" h="full" />
                </div>
                <span flex="~" w="full" justify="center" bg="green-500" text="lg primaryOp dark:primary" rounded="xl" p="1" font="bold">مجاني</span>

                <div my="4" w="full" border="~ secondary dark:secondaryOp"></div>

                <NuxtLink v-for="action in actions" :key="action.route" :to="action.route" w="full" cursor="pointer" aspect="square" rounded="lg" flex="~" items="center" justify="center" :class="[
                    $route.path == action.route ? 'bg-secondary dark:bg-secondaryOp text-primaryOp dark:text-primary' : 'bg-primary dark:bg-primaryOp text-tertiaryOp dark:text-tertiary',
                ]">
                    <component :is="action.icon" w="12" h="12" />
                </NuxtLink>
            </div>

            <div flex="~ col" h="full" pb="10" justify="end" items="center" text="primary">
                <IconEnabSymbol w="12" h="12" text="green-500" />
            </div>
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