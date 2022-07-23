<template>
  <div h="screen" position="relative" flex="~ col" justify="between" bg="gray-300">
    <div id="openedwindows"></div>
    

    <div>
      <slot />
    </div>

    <!-- Bottom Bar -->
    <div w="full" h="14">
      <UiDesktopBottomBar />
    </div>
  </div>
</template>
