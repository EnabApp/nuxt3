import { acceptHMRUpdate, defineStore } from "pinia";

const baseUrl = "/api/auth";
const router = useRouter();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    //? Fetch state from local storage to enable user to stay logged in
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
          console.log("Successful Registration");
        })
        .catch((error) => {
          throw error;
        });
    },

    //? Login with Google
    async loginWithGoogle() {
      await $fetch(`${baseUrl}/loginWithGoogle`, {
        method: "POST",
      })
        .then((res) => {
          //? Update Pinia state
          // this.user = res.user;
          // this.token = res.user.accessToken;

          //? Store user in local storage
          // localStorage.setItem("user", JSON.stringify(this.user));
          // localStorage.setItem("token", JSON.stringify(this.token));
          console.log("Successful Login");
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

          //? Store user in local storage
          localStorage.setItem("user", JSON.stringify(this.user));
          localStorage.setItem("token", JSON.stringify(this.token));
          console.log("Successful Login");
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
      router.push("/auth/login");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
