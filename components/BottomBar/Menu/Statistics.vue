<template>
    <div m="y-24px" un-text="white">
        <span un-text="primaryOp dark:primary">إحصائيات</span>
    </div>
    <!-- Row -->
    <div flex="~">
        <!-- Points -->
        <div cursor="pointer" bg="primary hover:secondary dark:primaryOp dark:hover:secondaryOp" un-text="primaryOp dark:primary" p="x-10px y-5px" h="64px" w="155px" flex="~" border="rounded-5px" items="center" justify="start">
            <!-- Icon -->
            <div w="52px" h="52px" m="r-10px l-18px" class="i-carbon-condition-wait-point"></div>
            <!-- Title -->
            <div flex="~ col">
                <span font="bold">23,400</span>
                <span un-text="xs">نقطة</span>
            </div>
        </div>

        <!-- Users -->
        <div cursor="pointer" bg="primary hover:secondary dark:primaryOp dark:hover:secondaryOp" un-text="primaryOp dark:primary" p="x-10px y-5px" h="64px" w="155px" flex="~" border="rounded-5px" items="center" justify="start">
            <!-- Icon -->
            <div w="52px" h="52px" m="r-10px l-18px" class="i-carbon-user-avatar-filled"></div>
            <!-- Title -->
            <div flex="~ col">
                <span font="bold">12</span>
                <span un-text="xs">مستخدماً</span>
            </div>
        </div>

        <!-- Businesses -->
        <div cursor="pointer" bg="primary hover:secondary dark:primaryOp dark:hover:secondaryOp" un-text="primaryOp dark:primary" p="x-10px y-5px" h="64px" w="155px" flex="~" border="rounded-5px" items="center" justify="start">
            <!-- Icon -->
            <div w="52px" h="52px" m="r-10px l-18px" class="i-ic-sharp-group-work"></div>
            <!-- Title -->
            <div flex="~ col">
                <span font="bold">3</span>
                <span un-text="xs">أعمال</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const appsStore = useStoreApps();
</script>