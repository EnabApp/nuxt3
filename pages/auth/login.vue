<template>
  <div bg="secondary dark:secondaryOp" h="screen" w="screen" flex="~ col" items="center" justify="center">
    <div w="content" h="content" p="50px" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-45px"
      items="center">

        <IconEnab text="primary" w="128px sm:64px md:96px" h="128px sm:64px md:96px" />

      <div flex="~ col gap-30px" justify="center" items="center">
        <div flex="~ col gap-25px">
          <!-- Email -->
          <UiInput v-model="input.email" w="270px" placeholder="البريد الإلكتروني" type="email" icon="IconEmail" />

          <div flex="~ col gap-5px">
            <!-- Password -->
            <UiInput v-model="input.password" w="270px" placeholder="كلمة المرور" type="password" icon="IconLock" />
            <p v-if="authError" text="xs red" mr="10px" truncate="~" w="50">
              {{ authError }}
            </p>
          </div>

          <!-- Submit -->
          <div v-if="input.email" class="delay-50 duration-200 animate-fade-in">
            <UiButton @click="handelSubmit()">
              <div flex="~ gap-15px" justify="center" text="primary dark:primaryOp" items="center">
                <span>تسجل الدخول</span>
                <IconLogin w="20px" />
              </div>
            </UiButton>
          </div>
        </div>

        <!-- Divider -->
        <div flex="~" w="full" justify="center" items="center">
          <div w="33%" rounded="full" h="0.5px" bg="secondaryOp dark:secondary" />
          <span>او سجل مع</span>
          <div w="33%" rounded="full" h="0.5px" bg="secondaryOp dark:secondary" />
        </div>
        <div>
          <div flex="~ col gap-8px">
            <!-- Google Login -->
            <div bg="primaryOp dark:primary" hover="secondaryOp dark:bg-secondary" duration="200" rounded="5px"
              w="270px" h="50px" flex="~ gap-10px" justify="center" items="center" cursor="pointer"
              @submit.prevent="signInWithGoogle()">
              <span text="primary dark:primaryOp" font="semibold">Google</span>
              <IconGoogle w="20px" h="20px" text="primary dark:primaryOp" />
            </div>

            <!-- FaceBook Login -->
            <!-- <div
              bg="primaryOp dark:primary"
              rounded="5px"
              w="270px"
              h="50px"
              flex="~ gap-10px"
              justify="center"
              items="center"
              cursor="pointer"
            >
              <span text="primaryOp" font="semibold">FaceBook</span>
              <div w="20px" h="20px" bg="primary dark:primaryOp" />
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div flex="~ gap-50px" h="48px" w="sm md:2xl lg:3xl" border="rounded-10px" m="10" justify="center" items="center"
      bg="primary dark:primaryOp opacity-50 dark:opacity-50" un-text="primaryOp dark:primary xs md:sm lg:sm xl:md">
      <span cursor="pointer">هل تحتاج المساعدة؟</span>
      <span cursor="pointer">نسيت كلمة المرور؟</span>
      <nuxt-link to="/auth/register">
        <span text="primaryOp dark:primary" underline="~" duration="200" decoration="blue-500 hover:red"
          cursor="pointer">أليس لديك حساب؟</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Login",
  // middleware: auth,
});

const router = useRouter();

const { login, loginWithGoogle } = useAuth();

const authError = ref("");

const input = reactive({
  email: "",
  password: "",
});

async function signInWithGoogle() {
  try {
    await loginWithGoogle();
  } catch (error) {
    console.log(error);
  }
}

const handelSubmit = async () => {
  try {
    await login({ email: input.email, password: input.password });
    input.email = "";
    input.password = "";

  } catch (err) {
    authError.value = err.message;
  }
};
</script>
