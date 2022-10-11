export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  if (authStore.user.value || authStore.token.value) {
    return navigateTo("/");
  }
});
