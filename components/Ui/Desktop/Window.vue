<template>
    <div ref="el" bg="primary" style="position: fixed" :style="style">
        <!-- <slot /> -->
        asd
    </div>
</template>


<script setup>
const el = ref<HTMLElement | null>(null)

const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})

console.log(x, y, style)

watch( () => style.value, (newX) => {
//   style.value.left = newX + 'px'
console.log(newX)
})
</script>