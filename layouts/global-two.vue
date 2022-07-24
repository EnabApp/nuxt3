<template>
    <div flex="~ grow">
        <div p="2" basis="sm:2/8 1/8" flex="~ col grow">
            <div p="x-4 y-3" bg="b-30" border="rounded-lg" flex="grow">
                <slot name="right" />
            </div>
        </div>
        <div p="2" basis="sm:6/8 7/8" flex="~ col">
            <div p="x-4 y-3" border="rounded-lg" flex="grow">
                <slot name="left" />
            </div>
        </div>
    </div>
</template>
