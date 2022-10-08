<template>
  <div container="none" my="10%">
    <div w="content" h="content" p="50px" border="rounded-10px" bg="primary dark:primaryOp" flex="~ col gap-40px"
      items="center">
      <!-- ?Logo -->
      <IconEnabLight text="primary" w="128px" />

      <div flex="~ col gap-30px" justify="center" w="100%" h="100%" items="center" relative="~">
        <div class="flex flex-col md:flex-row gap-35px">
          <!-- ?Name -->
          <UiInput v-model="Register.name" w="190px lg:270px" placeholder="الأسم الثلاثي" type="text"
            icon="IconProfile" />

          <!-- ?Phone Number -->
          <UiInput v-model="Register.phonenumber" w="190px lg:270px" placeholder="رقم الهاتف" type="text" icon="IconPhone" />
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
        <p v-if="authError" text="xs red" mr="10px" top="100%" truncate="~" w="50" absolute="~">
          {{ authError }}
        </p>

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

const { register } = useAuth();

const authError = ref("");

const Register = reactive({
  name: "",
  email: "",
  phonenumber: "",
  password: "",
});

const handelSubmit = async () => {
  // try {
  //   await register({
  //     email: Register.email,
  //     password: Register.password,
  //     name: Register.name,
  //     number: Register.number,
  //   });
  //   Register.email = "";
  //   Register.password = "";
  //   Register.name = "";
  //   Register.number = "";
  // } catch (err) {
  //   authError.value = err.message;
  // }
  const { data, pending, error, refresh } = await useFetch("/api/auth/register", {
    method: "POST",
    onRequest({ request, options }) {
      options.headers = { "Content-Type": "application/json" };
      request = JSON.stringify({
        email: Register.email,
        password: Register.password,
        name: Register.name,
        phonenumber: Register.phonenumber,
      });
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
      authError.value = error.message;
    },
    onResponse({ request, response, options }) {
      // Process the response data
      Register.email = "";
      Register.password = "";
      Register.name = "";
      Register.phonenumber = "";
      return response._data;
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
      authError.value = response._data.message;
    },
  });
};
</script>
