<template>
  <div h="screen" w="screen" flex="~ col" justify="center" items="center">
    <div w="content" h="content" p="50px" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-66px"
      items="center">
      <!-- ?Logo -->
      <IconEnabLight w="112px md:128px" />

      <div flex="~ col gap-30px" justify="center" items="center">
        <div flex="~ col gap-25px">
          <!-- ?Email -->
          <UiInput v-model="logIn.email" w="190px lg:270px 2xl:320px" placeholder="البريد الإلكتروني" type="email"
            icon="IconEmail" />

          <!-- ?Password -->
          <UiInput v-model="logIn.password" w="190px lg:270px 2xl:320px" placeholder="كلمة المرور" type="password"
            icon="IconLock" />

          <!-- ?Error Message -->
          <p v-if="authError" text="xs red" mr="10px">
            {{ authError }}
          </p>

          <!-- ?Submit -->
          <div v-if="logIn.email" class="delay-50 duration-200 animate-fade-in">
            <UiButton @click="login()" rounded="10px">
              <div flex="~ gap-15px" justify="center" text="primary dark:primaryOp" items="center">
                <span>تسجل الدخول</span>
                <IconLogin w="20px" />
              </div>
            </UiButton>
          </div>
        </div>

        <!-- ?Divider -->
        <div flex="~" w="full" justify="center" items="center">
          <div w="33%" rounded="full" h="0.5px" bg="secondaryOp dark:secondary" />
          <span text="xs md:md lg:lg">او سجل مع</span>
          <div w="33%" rounded="full" h="0.5px" bg="secondaryOp dark:secondary" />
        </div>
        <div>
          <div flex="~ col gap-8px">
            <!-- ?Google Login -->
            <div bg="primaryOp dark:primary" hover="secondaryOp dark:bg-secondary" duration="200" rounded="10px"
              w="190px lg:270px" h="50px" flex="~" justify="center" items="center" cursor="pointer"
              @click="loginWithGoogle()">
              <span w="70%" text="center 20px primary dark:primaryOp">Google</span>
              <IconGoogle w="22px" text="primary dark:primaryOp" />
            </div>

            <!-- ?FaceBook Login -->
            <!-- <div
              bg="primaryOp dark:primary"
              rounded="10px"
              w="270px"
              h="50px"
              flex="~"
              justify="center"
              items="center"
              cursor="pointer"
            >
              <span w="70%" text="center 20px primary dark:primaryOp">FaceBook</span>
              <div w="20px" bg="primary dark:primaryOp" />
            </div> -->
          </div>
        </div>
      </div>

      <!-- ?Feed Back -->
      <div flex="~ gap-10px md:gap-50px" h="48px" w="xs md:xl lg:xl" border="rounded-10px" m="10" justify="center"
        items="center" bg="primary dark:primaryOp opacity-50 dark:opacity-50"
        text="primaryOp dark:primary xs md:xs lg:sm xl:md">
        <span cursor="pointer">هل تحتاج المساعدة؟</span>
        <span cursor="pointer">نسيت كلمة المرور؟</span>
        <nuxt-link decoration="none" to="/auth/register">
          <span text="primaryOp dark:primary" cursor="pointer">لا تمتلك حساب؟</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// const authStore = useAuthStore();
const router = useRouter();

definePageMeta({
  title: "Login",
  // middleware: "guest",
});

const authError = ref("");

const logIn = reactive({
  email: "",
  password: "",
});

// const loginWithGoogle = async () => {
//   await $fetch("/api/auth/loginWithGoogle", { method: "post" })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       authError.value = err.message;
//     });
// };

function loginWithGoogle() {
  authStore
    .loginWithGoogle()
    .then((_response) => router.push("/"))
    .catch((error) => (authError.value = error));
}

function login() {
  if (!logIn.email || !logIn.password)
    return (authError.value = "الرجاء ادخال البريد الالكتروني وكلمة المرور");
  authStore
    .login(logIn)
    .then((_response) => router.push("/"))
    .catch((error) => (authError.value = error));
}
</script>
