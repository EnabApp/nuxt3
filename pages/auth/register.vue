<template>
  <NuxtLayout name="global-one">

    <div flex="~ col" h="full" justify="center" items="center">
      <div bg="w-20 dark:s-15" p="3" w="md" border="~ 2 rounded-3xl w-10 dark:w-20" shadow="2xl b-5">
        <div flex="~ col" m="10" text="right">
          <div>
            <h1 text="black dark:white">تسجيل</h1>
            <span text="b-40 dark:gray-500"> مرحبا بك في نظام عنب</span>
          </div>
          <div class="flex flex-col mt-5 space-y-6">
            <UiInput icon="i-clarity-user-solid dark:text-gray-400" label="الاسم" placeholder="ادخل الاسم الكامل" type="text" />
            <UiInput icon="i-clarity-email-solid dark:text-gray-400" label="البريد الالكتروني" placeholder="ادخل بريد الكتروني غير مستخدم مسبقاً" type="email" />
            <UiInput icon="i-clarity-lock-solid dark:text-gray-400" label="كلمة السر " placeholder="ادخل كلمة السر" type="password" />
            <UiInput icon="i-clarity-lock-solid dark:text-gray-400" label="تأكيد كلمة السر" placeholder="ادخل كلمة السر مجدداً" type="password" />
            <div flex="~ col">
              <button bg="primary" dark:bg-gradient="to-l from-primary to-b-60" class="py-2 text-lg text-white border-none rounded-lg cursor-pointer">
                تسجيل
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <span text="gray-700 dark:gray-500" class="text-sm"> لديك حساب ؟ </span>
        <nuxt-link to="/auth/login">
          <span text="gray-700 dark:gray-500" class="text-sm"> سجل دخول </span>
        </nuxt-link>
      </div>
    </div>
  </NuxtLayout>
</template>

<script></script>

<style>
</style>
