export default function () {
    const isOpen = ref(false)
    const open = (i) => isOpen.value = i
    return { isOpen, open }
}