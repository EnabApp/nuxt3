<template>
  <div h="screen" w="screen" flex="~ col" justify="center" items="center">
    <div w="content" h="content" p="50px" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-66px"
      items="center">
      <!-- ?Logo -->
      <IconEnabLight w="112px md:128px" />

      <div flex="~ col gap-8" justify="center" items="center">
        <div flex="~ col gap-4" justify="center" items="center">
          <Transition name="slide-up">
            <AuthEmailPassword key="AuthEmailPassword" v-if="emailPasswordState" />
          </Transition>

          <p v-if="authStore.getCreateError" w="full" text="xs red right" mr="10px">
            {{ authStore.getCreateError }}
          </p>

          <!--? Submit -->
          <div key="LoginWithEmailButton" @click="
            emailPasswordState ? authStore.login() : emailPasswordToggle()
          " text="center lg primary dark:primaryOp" h="50px" position="relative" bg="primaryOp dark:primary"
            hover="secondaryOp dark:bg-secondary" w="190px lg:270px" duration="200" rounded="10px" flex="~"
            justify="center" items="center" cursor="pointer">
            <span v-if="emailPasswordState">تسجيل الدخول</span>
            <span v-else>البريد الالكتروني</span>
            <IconLoading v-if="emailPasswordState && authStore.getLoadingUserPassword" right="4" position="absolute"
              w="22px" text="primary dark:primaryOp" />
            <IconLogin v-else-if="
              emailPasswordState && !authStore.getLoadingUserPassword
            " right="4" position="absolute" w="22px" text="primary dark:primaryOp" />
            <IconEmail v-else right="4" position="absolute" w="22px" text="primary dark:primaryOp" />
          </div>
        </div>

        <p v-if="emailPasswordState" @click="
          () => {
            emailPasswordToggle(), (authStore.error = '');
          }
        " text="left xs hover:primaryOp dark:hover:primary" cursor="pointer" w="full">
          تسجيل الدخول بطريقة أخرى
        </p>
        <!-- ?Divider -->
        <div w="100%" v-else rounded="full" h="1px" bg="tertiaryOp dark:tertiary" />

        <div v-if="!emailPasswordState">
          <div flex="~ col gap-8px">
            <!-- ?Google Login -->
            <div @click="authStore.loginWithGoogle()" position="relative" bg="primaryOp dark:primary"
              hover="secondaryOp dark:bg-secondary" duration="200" rounded="10px" w="190px lg:270px" h="50px" flex="~"
              justify="center" items="center" cursor="pointer">
              <span text="center 20px primary dark:primaryOp">كوكل</span>
              <IconGoogle right="4" position="absolute" w="22px" text="primary dark:primaryOp" />
            </div>

            <!-- ?FaceBook Login -->
            <!-- <div @click="authStore.loginWithFacebook()" position="relative" bg="primaryOp dark:primary"
              hover="secondaryOp dark:bg-secondary" duration="200" rounded="10px" w="190px lg:270px" h="50px" flex="~"
              justify="center" items="center" cursor="pointer">
              <span text="center 20px primary dark:primaryOp">فيس بوك</span>
              <IconFacebook right="4" position="absolute" w="22px" text="primary dark:primaryOp" />
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
definePageMeta({
  title: "Login",
  middleware: "guest",
});

const [emailPasswordState, emailPasswordToggle] = useToggle();

const authStore = useAuth();
const router = useRouter();
const authError = ref("");
</script>
