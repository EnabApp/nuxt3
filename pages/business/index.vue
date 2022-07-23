<template>
    <NuxtLayout name="global-one">
        <div h="full" w="full" flex="~ col gap-14" items="center" justify="center">
            <h1 un-text="b-80">أختر نوع العمل</h1>
            <div grid="~ cols-3 gap-5">
                <div v-for="item in 5" :key="item" cursor="pointer" bg="w-20 hover:w-40 dark:s-15" transition="~ duration-300 delay-75" p="3" border="~ 2 rounded-3xl w-10 hover:w-30 dark:w-20" shadow="hover:2xl b-5" w="60" h="60" flex="~ col gap-4" justify="center" items="center" transform="~ -hover:translate-y-4" un-text="b-70" position="relative">
                    <div class="text-7xl i-akar-icons-cart"></div>
                    <span class="text-xl font-semibold">سوبرماركت</span>

                    <div position="absolute top-2">
                        <span un-text="sm" bg="w-30" p="x-4 y-0.5" border="rounded-xl">Registered</span>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
    title: "Select Business",
});
</script>
