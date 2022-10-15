import { acceptHMRUpdate, defineStore } from "pinia";

export const useAuthStore = defineStore("auth-store", {
  state: () => ({
    //? Fetch state from Cookie storage to enable user to stay logged in
    token: useCookie("auth:token"),

    // Login With Email
    email: "",
    password: "",

    // Error
    error: "",
  }),
  getters: {
    getError: (state) => state.error,
  },
  actions: {
    //? Register function
    async register(Register: Object) {
      await $fetch(`/api/auth/register`, {
        method: "POST",
        body: Register,
      })
        .then((res) => {
          console.log("Successful Registration");
        })
        .catch((error) => {
          this.error = "حدثت مشكلة أثناء التسجيل. الرجاء المحاولة مرة أخرى";
          throw error;
        });
    },

    // Login with Google
    async loginWithGoogle() {
      const credentials = Realm.Credentials.google("http://localhost:3000");
      app
        .logIn(credentials)
        .then((user) => {
          console.log(`Logged in with the user: ${user.id}`);
        })
        .catch((err) => {
          console.error("Failed to log in", err);
        });
    },

    //? Login function
    async login() {
      if (!this.email || !this.password) {
        this.error = "الرجاء ادخال البريد الالكتروني وكلمة المرور.";
        return true;
      }
      await $fetch(`/api/auth/login`, {
        method: "POST",
        body: {
          email: this.email,
          password: this.password,
        },
      })
        .then(async (res) => {
          //? Update Pinia state
          this.token = res.user.accessToken;

          //? Store user in local storage
          const token = useCookie("auth:token");
          token.value = JSON.stringify(this.token);
          return navigateTo("/");
        })
        .catch((error) => {
          this.error = "البريد الالكتروني او كلمة المرور غير صحيحة.";
          throw error;
        });
    },

    //? Logout function
    async logout() {
      const router = useRouter();

      this.token = null;
      const token = useCookie("auth:token");
      token.value = null;
      router.push("/auth/login");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
