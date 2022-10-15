import { acceptHMRUpdate, defineStore } from "pinia";
export const useAuth = defineStore("authStore", {
  state: () => ({
    email: "",
    password: "",

    error: "",
  }),
  getters: {},

  actions: {
    //Register
    async register(data) {
      console.log("register");
      console.log(data);
      const supabase = useSupabaseClient();
      try {
        const { user, error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });

        if (user) {
          navigateTo("/auth/login");
        }
        if (error) throw error;
      } catch (error) {
        console.log(error);
      }
    },

    //login
    async login() {
      const supabase = useSupabaseClient();
      if (!this.email || !this.password) {
        this.error = "Please enter your email and password";
        return this.error;
      }

      const { data, error } = await supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });

      if (data) navigateTo("/");

      if (error) {
        this.error = "Invalid credentials";
        return;
      }

      if (data) {
        this.error = "";
        return;
      }
    },

    //login with google
    async loginWithGoogle() {
      const supabase = useSupabaseClient();
      const { user, error } = await supabase.auth.signIn({
        provider: "google",
      });

      if (user) {
        navigateTo("/");
      }
      if (error) throw error;
    },

    // LogOut
    async logout() {
      const supabase = useSupabaseClient();
      const { error } = await supabase.auth.signOut();
      if (error) {
        this.error = "Something went wrong";
      }
      navigateTo("/auth/login");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
}
