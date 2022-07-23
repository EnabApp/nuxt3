<template>

  <div class="bg-default">
    <div h="screen" flex="~ col" class="backdrop-blur-3xl">
      <UiHeader p="t-1" :tabs="tabs" />
      <div h="full" border="rounded-lg">
        <!-- <div id="sidebar"></div> -->

        <div m="x-auto" flex="~" h="full" w="full">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

// Color Mode Switching
const colorMode = useColorMode();
const { state: currentColor, next } = useCycleList(
  ["system", "light", "dark"],
  {
    initialValue: colorMode.preference,
  }
);
watch(
  () => currentColor.value,
  (newColor) => (colorMode.preference = newColor)
);

useHead({
  meta: [
    {
      name: "og:title",
      content: route.meta.title ? `${route.meta.title} · Enab` : "Enab",
    },
  ],
});

// Header Tabs
const tabs = [
  { title: "Home", route: "/", icon: "i-line-md-moon-filled" },
  { title: "Login", route: "/auth/login", icon: "i-line-md-moon-filled" },
  { title: "register", route: "/auth/register", icon: "i-line-md-moon-filled" },
  { title: "Business", route: "/business", icon: "i-line-md-moon-filled" },

];
</script>

<style scoped>
.bg-default {
  background-image: url('https://images.unsplash.com/photo-1612885594304-ca622fff47e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
  /* background-image: url('https://images.unsplash.com/photo-1635255224530-c8cdbad2f1e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'); */
  /* background-size: 200% 200%; */
  background-position: 100% 180%;

/* animation: lightMove 5s infinite; */
}
/* @keyframes lightMove {
  0% {
    background-position: 100% 475%;
  }
  50% {
    background-position: 100% 490%;
  }
  100% {
    background-position: 100% 475%;
  }
} */

.dark .bg-default {

  /* background: #111827; */
  /* background-image: url('https://images.unsplash.com/photo-1625685553965-2fde542c7487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'); */

  /* background-size: 200% 300%; */
  /* background-position: 60% 340%; */

  background-image: url('https://images.unsplash.com/photo-1612162661740-ea1a85c5c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
  /* background-image: url('https://images.unsplash.com/photo-1516249181155-bbf89a130f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1580616163219-f6004b0451a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'); */

  /* background-image: url('https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); */


  /* background-image: url('https://images.unsplash.com/photo-1612162661740-ea1a85c5c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1533150651047-3d12d7050b60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1608298194696-3a34360477b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'); */

  /* background-image: linear-gradient(to top, transparent, black), */
    /* linear-gradient(to right, rgb(22, 31, 51), black); */
  /* background-size: 100% 100%, 4000% 100%; */
  /* animation: move 5s infinite ease-in; */
}

/* @keyframes move {
  0% {
    background-position: center center, left center;
  }

  30% {
    background-position: center center, right center;
  }

  90% {
    background-position: center center, left center;
  }
} */
</style>
