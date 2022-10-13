import decode from "jwt-decode";

export default defineNuxtRouteMiddleware(async () => {
  function isAuthenticated() {
    const token = useCookie("auth:token");

    if (token.value) {
      const decodedToken = decode(token.value);
      //! const decodedRefreshToken = decode(refreshToken.value);
      
      try {
        decodedToken;
        const exp  = decodedToken.exp;
        if (Date.now() >= exp * 1000) {
          return false;
        }
      } catch (err) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
  if(!isAuthenticated()) {
    return navigateTo("/auth/login");
  }
});
