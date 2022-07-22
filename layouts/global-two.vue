<template>
    <div w="full" flex="~">
        <div class="basis-1/8" p="2" flex="~ col">
            <div shadow="sm" border="~ w-20 rounded-lg" p="x-4 y-3" bg="w-10" flex="grow">
                <slot name="right" />
            </div>
        </div>
        <div class="basis-7/8" p="2" flex="~ col">
            <div shadow="sm" border="~ w-20 rounded-lg" p="x-4 y-3" bg="w-10" flex="grow">
                <slot name="left" />
            </div>
        </div>
    </div>
</template>
