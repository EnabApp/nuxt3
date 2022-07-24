<template>
    <div class="basis-1/8" p="2" flex="~ col">
        <div p="x-4 y-3" bg="b-30" border="rounded-lg" flex="grow">
            <slot  name="right" />
        </div>
    </div>
    <div class="basis-7/8" p="2" flex="~ col">
        <div p="x-4 y-3" border="rounded-lg" flex="grow">
            <slot name="left" />
        </div>
    </div>
</template>
