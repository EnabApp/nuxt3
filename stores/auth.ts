import { acceptHMRUpdate, defineStore } from "pinia";


export const useAuthStore = defineStore("auth-store", {
  state: () => ({
    //? Fetch state from local storage to enable user to stay logged in
    user: useCookie('auth:user'),
    token: useCookie('auth:token'),

    // Login With Email
    email: '',
    password: '',

    // Error
    error: '',
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
          throw error;
        });
    },

    //? Login with Google
    async loginWithGoogle() {
      await $fetch(`/api/auth/loginWithGoogle`, {
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
    async login() {
      if (!this.email || !this.password){
        this.error = "الرجاء ادخال البريد الالكتروني وكلمة المرور.";
        return true
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
          this.user = res.user;
          this.token = res.user.accessToken;

          //? Store user in local storage
          const user = useCookie('auth:user')
          const token = useCookie('auth:token')
          user.value = JSON.stringify(this.user)
          token.value = JSON.stringify(this.token)

          console.log("Successful Login");
        })
        .catch((error) => {
          this.error = "البريد الالكتروني او كلمة المرور غير صحيحة."
          throw error;
        });
    },

    //? Logout function
    async logout() {
      const router = useRouter();

      this.user = null;
      this.token = null;
      const user = useCookie('auth:user')
      const token = useCookie('auth:token')
      user.value = null
      token.value = null
      router.push("/auth/login");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
