import { acceptHMRUpdate, defineStore } from "pinia";

const baseUrl = "/api/auth";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    //? Initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    token: JSON.parse(localStorage.getItem("token")),
  }),
  actions: {

    //? Register function
    async register(Register: Object) {
      await $fetch(`${baseUrl}/register`, {
        method: "POST",
        body: Register,
      })
        .then((res) => {
          console.log("this is the Register things" ,res);
        })
        .catch((error) => {
          throw error;
        });
    },

    //? Login with Google
    async loginWithGoogle(){
      await $fetch(`${baseUrl}/loginWithGoogle`, {
        method: "POST",
      })
        .then((res) => {
          console.log("success");
        })
        .catch((error) => {
          throw error;
        });
    },

    //? Login function
    async login(logIn: Object) {
      await $fetch(`${baseUrl}/login`, {
        method: "POST",
        body: logIn,
      })
        .then((res) => {
          //? Update Pinia state
          this.user = res.user;
          this.token = res.user.accessToken;

          //? Store user in local storage to keep them logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(this.user));
          localStorage.setItem("token", JSON.stringify(this.token));
        })
        .catch((error) => {
          throw error;
        });
    },

    //? Logout function
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
