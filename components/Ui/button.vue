<template>
<div class="flex flex-col gap-1">
    <nuxt-link v-if="to" to="">
        <button class="py-2 text-lg text-white border-none rounded-lg bg-primary dark:bg-secondary" :class="color">button</button>
    </nuxt-link>
    <!-- <span class="iconify" data-icon="carbon:add"></span> -->
</div>
</template>

<script>
export default {
const props = defineProps({
  color: { default: "bg-primary" },
  to: { type: String, default: "" },
})
}
</script>

<style>

</style>