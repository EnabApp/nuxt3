import { useStorage } from '#imports'

export default defineNuxtRouteMiddleware(async () => {
  const user = useCookie('auth:user')
  const token = useCookie('auth:token')

  if (user.value || token.value) {
    return navigateTo("/");
  }
});
