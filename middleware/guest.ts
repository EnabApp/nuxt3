export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const route = useRoute();
  if (authStore.user || authStore.token) {
    return navigateTo("/");
  }
});
