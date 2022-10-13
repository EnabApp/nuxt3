<!-- SHOW SPACES FOR A BUSINESS -->

<template>
    <div flex="~ col gap-2" items="center" w="full" dir="ltr" h="screen" overflow-y="auto">
        <div flex="~" justify="between" items="end" w="5xl" mt="12">
            <h1>API Routes</h1>
            <div flex="~ col">
                <span text="xs">One click on row to copy route</span>
                <span text="xs">Double click on row to copy full data</span>
            </div>
        </div>
        <div v-for="(hook, index) in allHooks" :key="hook.hook" @click="copy(hook.hook)" @dblclick="copyApi(hook)" cursor="pointer" flex="~" p="2" rounded="lg" bg="secondary dark:secondaryOp dark:hover:opacity-70" items="center" w="5xl">
            <span mx="4" text="sm">{{ index+1 }}</span>
            <div flex="~ basis-1/3">
                <span text="primaryOp dark:primary">{{ hook.hook.split(':').pop() }}</span>
            </div>
            <span>{{ hook.hook.split(':').shift() }}</span>
            <div flex="~ gap-1 grow" justify="end" w="full" v-if="hook.data">
                <div v-for="attr in hook?.data" :key="attr" >
                    <UiToolTip :text="attr.type ?? 'string'">
                        <span bg="primary dark:primaryOp" px="2" text="xs tertiary dark:tertiaryOp" rounded="lg">
                            {{ attr.name }}
                        </span>
                    </UiToolTip>
                </div>
            </div>
            <span v-else flex="grow" w="full" text="right"></span>
        </div>       
    </div>
</template>
  
<script setup>
const { text, copy, copied, isSupported } = useClipboard()

const copyApi = (hook) => {
    const method = hook.hook.split(':').shift()
    if (method == 'get'){
        if (hook.data?.length > 0) {
            copy(`const data = await useApi("${hook.hook}", ${hook.data[0].name})`)
        } else {
            copy(`const data = await useApi("${hook.hook}")`)
        }
    } else {
        if (hook.data?.length > 0) {
            copy(`const data = await useApi("${hook.hook}", { ${hook.data.map(attr => attr.name).join(', ')} })`)
        } else {
            copy(`const data = await useApi("${hook.hook}")`)
        }
    }
}

</script>
  