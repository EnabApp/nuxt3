<template>
  <div h="screen" w="screen" flex="~ col" justify="center" items="center">
    <div w="content" h="content" p="50px" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-66px"
      items="center">
      <!-- ?Logo -->
      <IconEnabLight w="128px" />

      <div flex="~ col gap-30px" justify="center" w="100%" h="100%" items="center">
        <div class="flex flex-col md:flex-row gap-35px">
          <!-- ?Name -->
          <UiInput v-model="Register.name" w="190px lg:270px" placeholder="الأسم الثلاثي" type="text"
            icon="IconProfile" />

          <!-- ?Phone Number -->
          <UiInput v-model="Register.phonenumber" w="190px lg:270px" placeholder="رقم الهاتف" type="text"
            icon="IconPhone" />
        </div>

        <div class="flex flex-col md:flex-row gap-35px">
          <!-- ?Email -->
          <UiInput v-model="Register.email" w="190px lg:270px" placeholder="البريد الإلكتروني" type="email"
            icon="IconEmail" />

          <!-- ?Password -->
          <UiInput v-model="Register.password" w="190px lg:270px" placeholder="كلمة المرور" type="password"
            icon="IconLock" />
        </div>

        <!-- ?Error Message -->
        <div mr="75px">
          <p v-if="authError" text="xs red">
            {{ authError }}
          </p>
        </div>
        <!-- ?Submit -->
        <UiButton @click="handelSubmit()">
          <div flex="~ gap-15px" justify="center" text="primary dark:primaryOp" items="center">
            <span>انشاء الحساب</span>
            <IconRegister w="20px" />
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
  // middleware: auth
});

const authError = ref("");

const Register = reactive({
  name: "",
  email: "",
  password: "",
  phonenumber: "",
});

const handelSubmit = async () => {
  if (!Register.name || !Register.password || !Register.phonenumber)
    return (authError.value = "رجاءََ أملاء جميع الحقول");
  else if (Register.email < 10)
    return (authError.value = "رجاءََ أدخل بريد إلكتروني صحيح");
  await $fetch("/api/auth/register", {
    method: "post",
    body: {
      name: Register.name,
      email: Register.email,
      password: Register.password,
      phonenumber: Register.phonenumber,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      authError.value = err.message;
    });
};
</script>
