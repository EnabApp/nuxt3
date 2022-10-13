export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie("auth:token");

  if (token.value) {
    return navigateTo("/");
  }
});
