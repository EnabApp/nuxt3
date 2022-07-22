<template>
  <div
    :class="[
        'rounded-xl bg-s-10 dark:bg-gray-900 p-3 text-b-60 dark:text-w-60',
      //   'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
    ]"
  >
    <slot />
  </div>
</template>
