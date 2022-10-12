<template>
  <div h="screen" w="screen" flex="~ col" justify="center" items="center" mt="100px" >
    <div w="content" h="content" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-66px" items="center"
      relative="~">
      <!-- ?Logo -->
      <IconEnabLight w="112px md:128px" bottom="105% md:120%" absolute="~" />

      <div flex="~ col gap-30px" justify="center" w="100%" h="100%" items="center">
        <div class="flex flex-col md:flex-row gap-35px">
          <!-- ?Name -->
          <UiInput v-model="Register.name" w="190px lg:270px 2xl:320px" placeholder="الأسم الثلاثي" type="text"
            icon="IconProfile" />

          <!-- ?Phone Number -->
          <UiInput v-model="Register.phonenumber" w="190px lg:270px 2xl:320px" placeholder="رقم الهاتف" type="text"
            icon="IconPhone" />
        </div>

        <div class="flex flex-col md:flex-row gap-35px">
          <!-- ?Email -->
          <UiInput v-model="Register.email" w="190px lg:270px 2xl:320px" placeholder="البريد الإلكتروني" type="email"
            icon="IconEmail" />

          <!-- ?Password -->
          <UiInput v-model="Register.password" w="190px lg:270px 2xl:320px" placeholder="كلمة المرور" type="password"
            icon="IconLock" />
        </div>

        <!-- ?Error Message -->
          <p v-if="authError" text="xs red">
            {{ authError }}
          </p>
        <!-- ?Submit -->
        <UiButton @click="register()">
          <div flex="~ gap-15px" justify="center" text="primary dark:primaryOp" items="center">
            <span>انشاء الحساب</span>
            <IconRegister w="22px" />
          </div>
        </UiButton>
      </div>

      <!-- ?Feed Back -->
      <div flex="~ gap-10px md:gap-50px" h="48px" w="xs md:xl lg:xl" border="rounded-10px" m="10" justify="center"
        items="center" bg="primary dark:primaryOp opacity-50 dark:opacity-50"
        text="primaryOp dark:primary 12px md:xs lg:sm xl:md">
        <span cursor="pointer">هل تحتاج المساعدة؟</span>
        <nuxt-link decoration="none" to="/auth/login">
          <span text="primaryOp dark:primary" cursor="pointer">تمتلك حساب؟</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Register",
  middleware: "guest",
});

const authStore = useAuthStore();
const router = useRouter();
const authError = ref("");

// Register Form
const Register = reactive({
  name: "",
  email: "",
  password: "",
  phonenumber: "",
});

// Register
function register() {
  if (!Register.name || !Register.password || !Register.phonenumber)
    return (authError.value = "رجاءََ أملاء جميع الحقول");
  else if (Register.email < 10)
    return (authError.value = "رجاءََ أدخل بريد إلكتروني صحيح");
  authStore
    .register(Register)
    .then((_response) => router.push("/"))
    .catch((error) => (authError.value = error));
}
</script>
