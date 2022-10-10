<template>
    <div flex="~" items="center" justify="between">
        <!-- Right Titles -->
        <div flex="~ basis-1/4" text="2xl medium tertiary dark:tertiaryOp">
            <div @click="$router.push('/')" flex="~ gap-4" p="y-2 x-4" items="center" rounded="xl" bg="hover:secondary dark:hover:secondaryOp" un-text="tertiary dark:tertiaryOp hover:primaryOp dark:hover:primary" cursor="pointer">
                <!-- Icon -->
                <IconBoards w="8" />


                <!-- Business Title -->
                <div v-if="hasBusiness" decoration="none" class="hidden lg:flex">
                    {{ space?.business?.name }}
                </div>
            </div>


            <!-- Space Title -->
            <IconArrowLeft v-if="hasSpace" w="8" class="hidden lg:flex" />
            <NuxtLink v-if="hasSpace" :to="`/boards/${$route.params.businessId}`" :class="[
                hasBusiness && hasSpace 
                ? 'text-tertiary dark:text-tertiaryOp hover:text-primaryOp dark:hover:text-primary cursor-pointer'
                : 'text-primaryOp dark:text-primary'
            ]" decoration="none" class="hidden md:flex" p="2">
                {{ space.name }}
            </NuxtLink>

            <IconArrowLeft v-if="hasSpace && board?.name" text="primaryOp dark:primary" w="8" class="hidden md:flex" />

            <!-- Board Title -->
            <span p="2" text="primaryOp dark:primary">{{ board?.name }}</span>

        </div>

        <div :class="{ 'invisible' : spaceData?.boards.length <= 1}" flex="~ gap-2 row-reverse basis-2/4" justify="center">
            <div v-for="(board, index) in spaceData?.boards" :key="board.id" @click="slider.slide(index, 500)" w="4" h="4" :class="[
                index == selected
                ? 'bg-primaryOp dark:bg-primary'
                : 'bg-secondary dark:bg-tertiary'
            ]" cursor="pointer" class="group" rounded="full" position="relative">
                <span p="1" text="sm center secondaryOp dark:secondary" rounded="lg" class="invisible group-hover:visible" bg="tertiaryOp dark:tertiary" z="10" position="absolute" bottom="-10" right="-14" w="120px">
                    {{board.name}}
                </span>
            </div>
        </div>

        <!-- Left Actions -->
        <div flex="~ gap-3 basis-1/4" justify="end" items="center">
            <UiToolTip position="bottom" :text="$colorMode.preference == 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'" class="hidden md:flex">
                <div @click="$colorMode.preference == 'dark' ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                    <IconLightMode v-if="colorMode.value == 'dark'" text="primaryOp dark:primary" w="5" h="5" />
                    <IconDarkMode v-else text="primaryOp dark:primary" w="5" h="5" />
                </div>
            </UiToolTip>


            <div v-if="$route.path !== '/'" flex="~ gap-3">
                <UiToolTip v-for="action in actions" :key="action.icon" position="bottom" :text="action.text" class="hidden md:flex">
                    <NuxtLink :to="action.route" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                        <component :is="action.icon" text="primaryOp dark:primary" w="5" h="5" />
                    </NuxtLink>
                </UiToolTip>
            </div>

            <ClientOnly>
                <UiToolTip v-if="isTauri" position="bottom" text="اغلاق" class="hidden md:flex">
                    <div @click="exitApp()" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                        <IconClose text="primaryOp dark:primary" w="5" h="5" />
                    </div>
                </UiToolTip>
            </ClientOnly>

            <NuxtLink v-if="$route.path !== '/'" :to="`/`" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" :class="[
                    $route.path == `/enab/profile` ? 'saturate-200 hue-rotate-15' : ''
            ]" filter="hover:saturate-200 hover:hue-rotate-15">
                <IconUser w="10" cursor="pointer" />
            </NuxtLink>


        </div>
    </div>
</template>

<script setup>
import { exit } from '@tauri-apps/api/process';

const colorMode = useColorMode()
const isTauri = useTauri()
const exitApp = async () => await exit(1);

const props = defineProps({
    spaceData: {
        type: Object,
        required: true
    },
    selected: {
        type: Number,
        required: true
    }
})

const route = useRoute()
const space = computed(() => props.spaceData)
const board = computed(() => space.value?.boards[props.selected]);
const hasBusiness = computed(() => route.params.businessId || space.value?.business?.name)
const hasSpace = computed(() => route.params.spaceId || space.value?.name)

const homeRedirectionRoute = () => {
    // const path = route.path
    // if (path == '/') return ''
    // if (path == '/space/') return '/'
    // else return '/space/'
    if (hasSpace.value) return `/boards/${hasBusiness.value}`
    else if (hasBusiness.value) return '/'
    else return '/'
}

const actions = [
    {
        icon: 'IconStore',
        text: 'المتجر',
        route: 'store'
    },
    {
        icon: 'IconNotification',
        text: 'الإشعارات',
        route: 'store'
    },
]
</script>