<template>
    <NuxtLayout name="user">
        <div flex="~ col gap-8 grow">

            <h1 font="medium" text="3xl primaryOp dark:primary">المتجر</h1>

            <!-- HEADER -->
            <StoreHeader />

            <!-- CONTENT -->
            <slot />

        </div>
    </NuxtLayout>
</template>