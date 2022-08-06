<template>
    <div h="80px" bg="primary dark:primaryOp opacity-90 dark:opacity-90" class="backdrop-blur-[5px]" border="~ t-0 secondary dark:secondaryOp rounded-b-10px">
        <div flex="~" justify="between" items="center" p="y-20px x-36px">
            <!-- Right Actions -->
            <div>
                <span un-text="xl primaryOp dark:primary">اسم البشر</span>
            </div>

            <!-- Left Actions -->
            <div flex="~ gap-14px row-reverse">
                <div cursor="pointer" bg="primaryOp dark:primary" border="rounded-5px" un-text="primary dark:primaryOp" h="40px" w="40px" flex="~" items="center" justify="center">
                    <div h="22px" w="22px" rotate="180" class="i-octicon-sign-out-16"></div>
                </div>

                <div @click="toggleDark()" cursor="pointer" bg="primaryOp dark:primary" border="rounded-5px" un-text="primary dark:primaryOp" h="40px" w="40px" flex="~" items="center" justify="center">
                    <div h="22px" w="22px" :class="[ isDark ? 'i-ic-baseline-light-mode' : 'i-ic-round-dark-mode' ]"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
