<template>
    <div flex="~ gap-6">
        <span v-for="category in categories" :key="category"
        cursor="pointer"
        font="medium"
        text="1rem"
        :class="[
            category.route == $route.path
            ? 'text-green-400'
            : 'text-tertiaryOp dark:text-tertiary hover:text-secondaryOp hover:dark:text-secondary'
        ]"
        >
            {{ category.name }}
        </span>
    </div>
</template>

<script setup>
const categories = [
    { name: 'الصفحة الرئيسية', route: '/store'},
    { name: 'المبيعات', route: '/store/sales'},
    { name: 'المشتريات', route: '/store/purchases'},
    { name: 'المخزون', route: '/store/stock'},
    { name: 'المنتجات', route: '/store/products'},
    { name: 'العملاء', route: '/store/customers'},
    { name: 'الموردين', route: '/store/suppliers'},
    { name: 'الموظفين', route: '/store/employees'},
    { name: 'المحاسبة', route: '/store/accounting'},
    { name: 'التقارير', route: '/store/reports'},
]
</script>