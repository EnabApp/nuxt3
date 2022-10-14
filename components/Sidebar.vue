<template>
    <Transition name="slide-right">
        <div v-if="state" w="125px" border="l secondary dark:secondaryOp">
            <div flex="~ col" h="full" justify="between" p="x-8">
                <div flex="~ col gap-1" pt="8" items="center">
                    <IconUser2 w="16" h="16" />
                    <span flex="~" w="full" my="4" justify="center" bg="green-500" text="md primaryOp dark:primary" rounded="xl" p="y-0.5" font="medium">مجاني</span>

                    <div my="2" w="full" h="1px" bg="~ secondary dark:secondaryOp"></div>

                    <NuxtLink v-for="action in actions" :key="action.route" :to="action.route" w="full" cursor="pointer" aspect="square" rounded="lg" flex="~" items="center" justify="center" :class="[
                        getUrlMatch(action.route) ? 'text-primaryOp dark:text-primary' : 'text-tertiaryOp dark:text-tertiary hover:text-primaryOp dark:hover:text-primary',
                    ]">
                        <component :is="action.icon" w="8" h="8" />
                    </NuxtLink>
                </div>

                <div flex="~ col" h="full" pb="10" justify="end" items="center" text="primary">
                    <IconEnabSymbol cursor="pointer" @click="toggle()" w="8" h="8" text="green-500" />
                </div>
            </div>
        </div>
    </Transition>
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
        icon: 'IconUsers',
        route: '/users'
    },
    {
        name: 'store',
        icon: 'IconStore',
        route: '/store'
    },
    {
        name: 'settings',
        icon: 'IconSettings',
        route: '/settings'
    },
]

const { state, toggle } = useCookieState('sidebar')

const { path } = useRoute()

const getUrlMatch = (route) => {
    if (route == '/') return path == route || path.startsWith('/boards')
    else return path.startsWith(route)
}
</script>