<template>
    <div flex="~" justify="between">
        <!-- Right Titles -->
        <div flex="~" text="2xl medium tertiary dark:tertiaryOp">
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
            <NuxtLink v-if="hasSpace" :to="`/${$route.params.businessId}`" :class="[
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

        <!-- Left Actions -->
        <div flex="~ gap-3" items="center">
            <UiToolTip position="bottom" :text="$colorMode.preference == 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'" class="hidden md:flex">
                <div @click="$colorMode.preference == 'dark' ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                    <IconLightMode v-if="colorMode.value == 'dark'" text="primaryOp dark:primary" w="5" h="5" />
                    <IconDarkMode v-else text="primaryOp dark:primary" w="5" h="5" />
                </div>
            </UiToolTip>


            <UiToolTip v-for="action in actions" :key="action.icon" position="bottom" :text="action.text" class="hidden md:flex">
                <NuxtLink :to="`/${action.business}/${action.space}`" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" :class="[
                        $route.path == `/${action.business}/${action.space}` ? 'bg-info dark:bg-infoOp' : 'bg-secondary dark:bg-secondaryOp'
                ]">
                    <component :is="action.icon" text="primaryOp dark:primary" w="5" h="5" />
                </NuxtLink>
            </UiToolTip>
            
            <UiToolTip v-if="isTauri" position="bottom" text="اغلاق" class="hidden md:flex">
                <div @click="exitApp()" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                    <IconClose text="primaryOp dark:primary" w="5" h="5" />
                </div>
            </UiToolTip>

            <IconUser w="10" cursor="pointer" />


        </div>
    </div>
</template>

<script setup>
import { exit } from '@tauri-apps/api/process';

const colorMode = useColorMode()
const isTauri = useTauri()
console.log(isTauri)
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
    if (hasSpace.value) return `/${hasBusiness.value}`
    else if (hasBusiness.value) return '/'
    else return '/'
}

const actions = [
    {
        icon: 'IconBxsCart',
        text: 'المتجر',
        business: 'enab',
        space: 'store'
    },
    // {
    //     icon: 'IconNotification',
    //     text: 'الإشعارات',
    //     business: 'enab',
    //     space: 'store'
    // },
]
</script>