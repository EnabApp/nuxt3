<template>
    <div flex="~" justify="between">
        <div v-if="space && Object.keys(space).length !== 0" flex="~ gap-2" text="xl" font="medium" items="center">
            <IconSidebar v-if="!sidebarState" cursor="pointer" @click="sidebarToggle()" p="2" w="6" h="6" />

            <div flex="~ gap-4" items="center" rounded="xl" text="tertiary dark:tertiaryOp">
                <!-- Business Title -->
                <NuxtLink :to="'/'" decoration="none" un-text="tertiary dark:tertiaryOp hover:primaryOp dark:hover:primary" class="hidden lg:flex">
                    {{ space?.business?.name }}
                </NuxtLink>
            </div>
            <!-- Space Title -->
            <IconArrowLeft w="8" class="hidden lg:flex" />
            <NuxtLink :to="`/boards/${$route?.params?.businessId}`" cursor="pointer" decoration="none" un-text="tertiary dark:tertiaryOp hover:primaryOp dark:hover:primary" class="hidden md:flex" p="2">
                {{ space.name }}
            </NuxtLink>

            <IconArrowLeft w="8" class="hidden md:flex" />

            <!-- Board Title -->
            <span p="2" text="primaryOp dark:primary">{{ space.boards?.[spaceStore.selectedBoardIndex]?.name }}</span>

        </div>
        <div v-else flex="~ gap-2" items="center">
            <IconSidebar v-if="!sidebarState" cursor="pointer" @click="sidebarToggle()" p="2" w="6" h="6" />
            <UiInput placeholder="بحث" size="md" w="xs" icon="IconSearch" />
        </div>

        <span v-if="useSubdomain()"> {{ useSubdomain() }} subdomain </span>
        <span v-else>Main Domain</span>

        <div flex="~ gap-2">
            <div v-if="!sidebarState" flex="~ gap-3">
                <UiToolTip v-for="action in actions" :key="action.icon" position="bottom" :text="action.name" class="hidden md:flex">
                    <NuxtLink :to="action.route" flex="~" items="center" justify="center" w="10" h="10" rounded="10px" cursor="pointer" :class="[$route.path == action.route ? 'bg-info dark:bg-infoOp' : 'bg-secondary dark:bg-secondaryOp']">
                        <component :is="action.icon" text="primaryOp dark:primary" w="5" h="5" />
                    </NuxtLink>
                </UiToolTip>
            </div>

            <UiToolTip position="bottom" :text="$colorMode.preference == 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'" class="hidden md:flex">
                <div @click="$colorMode.preference == 'dark' ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'" flex="~" items="center" justify="center" w="10" h="10" rounded="10px" cursor="pointer" bg="secondary dark:secondaryOp">
                    <IconLightMode v-if="colorMode.value == 'dark'" text="primaryOp dark:primary" w="5" h="5" />
                    <IconDarkMode v-else text="primaryOp dark:primary" w="5" h="5" />
                </div>
            </UiToolTip>

            <UiToolTip position="bottom" text="الإشعارات" class="hidden md:flex">
                <NuxtLink to="/notifications" flex="~" items="center" justify="center" w="10" h="10" rounded="10px" cursor="pointer" bg="secondary dark:secondaryOp">
                    <IconNotification text="primaryOp dark:primary" w="5" h="5" />
                </NuxtLink>
            </UiToolTip>

            <UiToolTip position="bottom" text="تسجيل الخروج" class="hidden md:flex">
                <span to="/notifications" flex="~" items="center" justify="center" w="10" h="10" rounded="10px" cursor="pointer" bg="secondary dark:secondaryOp">
                    <IconLogOut @click="authStore.logout()" text="primaryOp dark:primary" w="5" h="5" />
                </span>
            </UiToolTip>

            <ClientOnly>
                <UiToolTip v-if="isTauri" position="bottom" text="اغلاق" class="hidden md:flex">
                    <div @click="exitApp()" flex="~" items="center" justify="center" w="10" h="10" rounded="10px" cursor="pointer" bg="secondary dark:secondaryOp">
                        <IconClose text="primaryOp dark:primary" w="5" h="5" />
                    </div>
                </UiToolTip>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
import { exit } from '@tauri-apps/api/process';

const authStore = useAuth()
const spaceStore = useSpace()
const space = computed(() => spaceStore.getSpace)

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