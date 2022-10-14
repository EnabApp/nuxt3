<template>
    <div flex="~" justify="between" items="center">
        <!-- right -->
        <div flex="~ gap-6">
            <NuxtLink to="/store" decoration="none" cursor="pointer" font="medium" un-text="1rem" :class="[
                !categoryId 
                ? 'text-green-400'
                : 'text-tertiaryOp dark:text-tertiary hover:text-secondaryOp hover:dark:text-secondary'
            ]">
                الصفحة الرئيسية
            </NuxtLink>
            
            <NuxtLink v-for="category in store.getCategories" :key="category" :to="`/store/${category.id}`" decoration="none" cursor="pointer" font="medium" un-text="1rem" :class="[
                category.id == categoryId
                ? 'text-green-400'
                : 'text-tertiaryOp dark:text-tertiary hover:text-secondaryOp hover:dark:text-secondary'
            ]">
                {{ category.name }}
            </NuxtLink>
        </div>
        
        <!-- left -->
        <div flex="~">
            <span bg="green-500 hover:green-600" cursor="pointer" rounded="xl" px="2" py="1" font="medium" text="sm primary dark:primaryOp">
                عضوية مدفوعة
            </span>
        </div>
    </div>
</template>

<script setup>
const store = useStore()
const { params } = useRoute()
const categoryId = params.category_id

</script>