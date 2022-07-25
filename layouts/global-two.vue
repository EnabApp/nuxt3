<template>
    <div flex="~ grow">
        <!-- Right -->
        <div p="2" basis="sm:2/8 1/8" flex="~ col grow">
            <div p="x-4 y-3" bg="b-30" border="rounded-lg" flex="grow">
                <slot name="right" />
            </div>
        </div>

        <!-- Left -->
        <div p="2" basis="sm:6/8 7/8" flex="~ col">
            <div p="x-0 y-1" border="rounded-lg" flex="grow">
                <slot name="left" />
            </div>
        </div>
    </div>
</template>
