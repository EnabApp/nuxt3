import { acceptHMRUpdate, defineStore } from "pinia";
export const useAuth = defineStore("authStore", {
  state: () => ({
    name: null,
    email: null,
    password: null,
    phonenumber: null,
    createError: null,
  }),
  getters: {
    getCreateError: (state) => state.createError,
  },

  actions: {
    //Register
    async register() {
      const supabase = useSupabaseClient();
      try {
        const { user, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });

        if (user) {
          navigateTo("/auth/login");
        }
      } catch (error) {
        this.createError = error;
      }
    },

    //login
    async login() {
      const supabase = useSupabaseClient();
      if (!this.email || !this.password) {
        this.error = "Please enter your email and password";
        return this.error;
      }
      try {
        const { data, error } = await supabase.auth.signIn({
          email: this.email,
          password: this.password,
        });
        if (data) navigateTo("/");
      } catch (error) {
        this.createError = error;
      }
    },

    //login with google
    async loginWithGoogle() {
      const supabase = useSupabaseClient();
      try {
        const { user, error } = await supabase.auth.signIn({
          provider: "google",
        });

        if (user) {
          navigateTo("/");
        }
      } catch (error) {
        this.createError = error;
      }
    },

    // LogOut
    async logout() {
      const supabase = useSupabaseClient();
      try {
        const { error } = await supabase.auth.signOut();
        navigateTo("/auth/login");
      } catch (error) {
        this.createError = error;
        console.log(error);
      }
    },

    //Create User For MongoDB

    async createUser(data) {
      console.log("createUser");
      try {
        const user = await useApi("post:user", data);
        return true;
      } catch (e) {
        console.log(e);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
}
