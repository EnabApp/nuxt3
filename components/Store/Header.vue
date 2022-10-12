<template>
    <div flex="~ gap-6">
        <span v-for="category in categories" :key="category"
        cursor="pointer"
        font="medium"
        text="1rem tertiaryOp dark:tertiary hover:secondaryOp hover:dark:secondary">{{category}}</span>
    </div>
</template>

<script setup>
const categories = [
    'الصفحة الرئيسية',
    'المبيعات',
    'المشتريات',
    'الموارد البشرية',
    'المالية',
    'التسويق',
    'المشاريع',
    'المخازن',
]
</script>