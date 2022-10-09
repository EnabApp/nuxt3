<template>
    <div flex="~" justify="between">
        <UiInput placeholder="بحث" size="md" w="xs" icon="IconSearch" />
        <UiToolTip position="bottom" text="الإشعارات" class="hidden md:flex">
            <NuxtLink to="/notifications" flex="~" items="center" justify="center" w="10" h="10" rounded="full" cursor="pointer" bg="secondary dark:secondaryOp">
                <IconNotification text="primaryOp dark:primary" w="5" h="5" />
            </NuxtLink>
        </UiToolTip>
    </div>
</template>