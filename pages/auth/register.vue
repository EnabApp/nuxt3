<template>
  <div bg="secondary dark:secondaryOp" h="screen" w="screen" flex="~ col" items="center" justify="center">
    <div w="content" h="content" p="50px" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-45px"
      items="center">
      <div>
        <IconEnab text="primary" w="128px sm:64px md:96px" h="128px sm:64px md:96px" />
      </div>
      <div flex="~ col gap-30px" justify="center" items="center">
        <div flex="~ gap-35px">
          <!-- Name -->
          <UiInput v-model="input.name" w="270px" placeholder="الأسم الثلاثي" type="text" icon="IconProfile" />

          <!-- Phone Number -->
          <UiInput v-model="input.number" w="270px" placeholder="رقم الهاتف" type="text" icon="IconPhone" />
        </div>

        <div flex="~ gap-35px">
          <!-- Email -->
          <UiInput v-model="input.email" w="270px" placeholder="البريد الإلكتروني" type="email" icon="IconEmail" />

          <!-- Password -->
          <UiInput v-model="input.password" w="270px" placeholder="كلمة المرور" type="password" icon="IconLock" />
        </div>
        <p v-if="authError" text="xs red" mr="10px" truncate="~" w="50">
          {{ authError }}
        </p>
        <!-- Submit -->
        <UiButton @click="handelSubmit()">
          <div flex="~ gap-15px" justify="center" text="primary dark:primaryOp" items="center">
            <span>انشاء الحساب</span>
            <IconRegister w="20px" />
          </div>
        </UiButton>
      </div>
    </div>

    <div flex="~ gap-50px" h="48px" w="xs md:2xl lg:3xl" border="rounded-10px" m="10" justify="center" items="center"
      bg="primary dark:primaryOp opacity-50 dark:opacity-50" un-text="primaryOp dark:primary xs md:sm lg:sm xl:md">
      <span cursor="pointer">هل تحتاج المساعدة؟</span>
      <nuxt-link to="/auth/login">
        <span text="primaryOp dark:primary" underline="~" duration="200" decoration="blue-500 hover:red"
          cursor="pointer">تمتلك حساب؟</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Register",
  // middleware: auth
});

const { register } = useAuth();

const authError = ref("");

const input = reactive({
  name: "",
  email: "",
  number: "",
  password: "",
});

const handelSubmit = async () => {
  try {
    await register({
      email: input.email,
      password: input.password,
      name: input.name,
      number: input.number,
    });
    input.email = "";
    input.password = "";
    input.name = "";
    input.number = "";
  } catch (err) {
    authError.value = err.message;
  }
};
</script>
