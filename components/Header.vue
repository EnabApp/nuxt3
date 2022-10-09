<template>
    <div flex="~" justify="between">
        <div flex="~ gap-2" items="center">
            <IconSidebar v-if="!sidebarState" cursor="pointer" @click="sidebarToggle()" p="2" w="6" h="6" />
            <UiInput placeholder="بحث" size="md" w="xs" icon="IconSearch" />
        </div>

        <div flex="~ gap-2">
            <div v-if="!sidebarState" flex="~ gap-3">
                <UiToolTip v-for="action in actions" :key="action.icon" position="bottom" :text="action.name" class="hidden md:flex">
                    <NuxtLink :to="action.route" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" :class="[$route.path == action.route ? 'bg-info dark:bg-infoOp' : 'bg-secondary dark:bg-secondaryOp']">
                        <component :is="action.icon" text="primaryOp dark:primary" w="5" h="5" />
                    </NuxtLink>
                </UiToolTip>
            </div>

            <UiToolTip position="bottom" text="الإشعارات" class="hidden md:flex">
                <NuxtLink to="/notifications" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                    <IconNotification text="primaryOp dark:primary" w="5" h="5" />
                </NuxtLink>
            </UiToolTip>

            <ClientOnly>
                <UiToolTip v-if="isTauri" position="bottom" text="اغلاق" class="hidden md:flex">
                    <div @click="exitApp()" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                        <IconClose text="primaryOp dark:primary" w="5" h="5" />
                    </div>
                </UiToolTip>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
import { exit } from '@tauri-apps/api/process';

const { state: sidebarState, toggle: sidebarToggle } = useCookieState('sidebar')


const colorMode = useColorMode()
const isTauri = useTauri()
const exitApp = async () => await exit(1);



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
</script>