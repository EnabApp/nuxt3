<template>
  <div class="bg-default" position="relative" h="screen" w="screen">
    <!-- <UiHeader :tabs="tabs" position="absolute" left="0" /> -->

    <slot />
  </div>
</template>

<script setup>
const tabs = [
  { title: "Home", route: "/", icon: "i-line-md-moon-filled" },
  { title: "Login", route: "/auth/login", icon: "i-line-md-moon-filled" },
  { title: "register", route: "/auth/register", icon: "i-line-md-moon-filled" },
  { title: "Business", route: "/business", icon: "i-line-md-moon-filled" },
];
</script>
<style scoped>
.bg-default {
  /* background-image: url('https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'); */
  background-image: url('https://i0.wp.com/windowsloop.com/wp-content/uploads/2021/06/img0.jpg');
  
  background-size: cover;
  /* background-position: 100% 180%; */

/* animation: lightMove 5s infinite; */
}
</style>
