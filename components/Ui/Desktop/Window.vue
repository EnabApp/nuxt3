<template>
  <div ref="el" bg="primary" :style="style" style="position: fixed">
    <!-- Drag me! I am at {{x}}, {{y}} -->
  <Transition>
    <div
      flex="~"
      place="items-center"
      justify="center"
      backdrop="~ blur-lg"
      m="5"
    >
      <div flex="~ col gap-2" h="full" max-w="2xl" min-w="2xl" max-h="xl">
        <!-- Header -->
        <div
          flex="~ gap-4"
          place="items-center"
          justify="between"
          p="x-2 y-2"
          text="2xl"
          font="medium"
        >
          <div flex="grow" text="w-80 dark:w-40">
            <slot name="title"></slot>
          </div>
          <div
            text="3xl w-80 hover:error-600"
            cursor="pointer"
          >
            <div text="w-80 dark:w-40" class="i-carbon-close hover:i-carbon-close-filled"></div>
          </div>
        </div>

        <!-- Content -->
        <div
          flex="grow"
          p="x-6 y-6"
          bg=" b-15 dark:w-5"
          border="rounded-lg"
        >
          <slot></slot>
        </div>

        <!-- Footer -->
        <div flex="~ gap-2" justify="center" m="t-4">
          <button >
                  gh
          </button>
          <button >Cancel</button>
        </div>
      </div>
    </div>
  </Transition>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>


