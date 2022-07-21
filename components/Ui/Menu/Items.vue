<template>
  <div
    role="menu"
    tabindex="0"
    bg-gradient="to-rb from-s-15 to-s-5 dark:from-s-25 dark:to-s-15"
    position="absolute right-0"
    z="50"
    w="56"
    m="t-2"
    transform="~  origin-top-right"
    divide="y s-10 dark:s-10"
    border="rounded-md"
    ring="1 black opacity-5"
    outline="focus:none"
  >
    <slot />
  </div>
</template>
