<template>
  <div h="screen" w="screen" flex="~ col" justify="center" items="center" mt="100px">
    <div w="content" h="content" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-66px" items="center" relative="~">
      <!-- ?Logo -->
      <IconEnabLight w="112px md:128px" bottom="105% md:120%" absolute="~" />

      <div flex="~ col gap-10px md:gap-16px" justify="center" w="100%" h="100%" items="center">
        <AuthSginUpForm />
        <!-- ?Error Message -->
        <p v-if="authStore.getCreateError" w="full" text="xs red right" mr="10px">
          {{ authStore.getCreateError }}
        </p>

        <!-- ?Submit -->
        <div @click="authStore.register()" text="center lg primary dark:primaryOp" h="50px" position="relative" bg="primaryOp dark:primary" hover="secondaryOp dark:bg-secondary" w="190px lg:270px" duration="200" rounded="10px" flex="~" justify="center" items="center" cursor="pointer">
          <span>انشاء الحساب</span>
          <IconRegister v-if="!loading" right="4" position="absolute" w="22px" text="primary dark:primaryOp" />
          <IconLoading v-else right="4" position="absolute" w="22px" text="primary dark:primaryOp" />
        </div>
      </div>

      <!-- ?Feed Back -->
      <div flex="~ gap-10px md:gap-50px" h="48px" w="xs md:xl lg:xl" border="rounded-10px" m="10" justify="center" items="center" bg="primary dark:primaryOp opacity-50 dark:opacity-50" text="primaryOp dark:primary 12px md:xs lg:sm xl:md">
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

const authStore = useAuth();
const router = useRouter();
const authError = ref("");
const loading = ref(false);


// Register
// const register = async () => {
//   loading.value = true;
//   if (
//     !Register.name ||
//     !Register.password ||
//     !Register.phonenumber ||
//     !Register.email
//   )
//     return (authError.value = "رجاءََ أملاء جميع الحقول");
//   else if (Register.email.length < 8 || !Register.email.includes("@"))
//     return (authError.value = "رجاءََ أدخل بريد إلكتروني صحيح");
//   else if (Register.password.length <= 6 || Register.password.length >= 16) {
//     if (Register.password.length <= 6)
//       return (authError.value =
//         "كلمة المرور يجب ان تكون اكبر من 6 احرف و أرقام و رموز");
//     else if (Register.password.length >= 16)
//       return (authError.value =
//         "كلمة المرور يجب ان تكون اصغر من 16 احرف و أرقام و رموز");
//   }
// };
</script>
