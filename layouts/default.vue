<template>

  <div class="bg-default">
    <div h="screen" flex="~ col" class="backdrop-blur-3xl">
      <UiHeader p="1" :tabs="tabs" />
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

];
</script>

<style scoped>
.bg-default {
  background-image: url('https://images.unsplash.com/photo-1612885594304-ca622fff47e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
  /* filter: contrast(0.8); */
  /* background-size: 200% 200%; */
  /* background-position: 100% 110%; */

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
  background-image: url('https://images.unsplash.com/photo-1612943448707-407836d8b8f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
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
