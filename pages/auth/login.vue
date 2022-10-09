<template>
  <div container="none" my="10%">
    <div w="content" h="content " p="50px" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-45px"
      items="center">
      <!-- ?Logo -->
      <IconEnabLight text="primary" w="128px" />

      <div flex="~ col gap-30px" justify="center" items="center">
        <div flex="~ col gap-25px">
          <!-- ?Email -->
          <UiInput v-model="logIn.email" w="190px lg:270px" placeholder="البريد الإلكتروني" type="email"
            icon="IconEmail" />

          <!-- ?Password -->
          <UiInput v-model="logIn.password" w="190px lg:270px" placeholder="كلمة المرور" type="password" icon="IconLock"
            relative="~" />
          <!-- ?Error Message -->
          <p v-if="authError" text="xs red" mr="10px" truncate="~" w="50" absolute="~">
            {{ authError }}
          </p>

          <!-- ?Submit -->
          <div v-if="logIn.email" class="delay-50 duration-200 animate-fade-in">
            <UiButton @click="handelSubmit()" rounded="10px">
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
              w="190px lg:270px" h="50px" flex="~ gap-10px" justify="center" items="center" cursor="pointer"
              @click="loginWithGoogle()">
              <span text="primary dark:primaryOp" font="semibold">Google</span>
              <IconGoogle w="20px" h="20px" text="primary dark:primaryOp" />
            </div>

            <!-- ?FaceBook Login -->
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
  // middleware: auth,
});

const authError = ref("");

const logIn = reactive({
  email: "",
  password: "",
});

const loginWithGoogle = async () => {
  await $fetch("/api/auth/loginWithGoogle", { method: "post" })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handelSubmit = async () => {
  if (!logIn.email || !logIn.password)
    return (authError.value = "الرجاء ادخال البريد الالكتروني وكلمة المرور");

  await $fetch("/api/auth/login", {
    method: "post",
    body: { email: logIn.email, password: logIn.password },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      authError.value = err.message;
    });
};
</script>
