<template>
    <div flex="~ col" h="full" justify="center" items="center">
      <div bg="w-20" class="backdrop-blur-lg" p="x-3 y-10" w="2xl" h="content" border="~ 2 rounded-3xl w-10 dark:w-20" shadow="2xl b-5">
        <div flex="~ col" m="10" un-text="right">
          <div flex="~ col gap-2">
            <h1 text="5xl b-90 dark:white">التسجيل</h1>
            <span text="2xl b-40 dark:gray-500"> مرحباً بك </span>
          </div>
          <div class="flex flex-col mt-10 space-y-6">
            <UiInput icon="i-clarity-email-solid" label="البريد الالكتروني" placeholder="ادخل البريد الالكتروني" type="text" />
            <UiInput icon="i-clarity-email-solid" label="البريد الالكتروني" placeholder="ادخل البريد الالكتروني" type="text" />
            <UiInput icon="i-clarity-lock-solid" label="كلمة السر " placeholder="ادخل كلمة السر" type="password" />
            <UiInput icon="i-clarity-lock-solid" label="كلمة السر " placeholder="ادخل كلمة السر" type="password" />
          </div>
          <div flex="~ col" class="mt-10">
            <button bg="primary" dark:bg-gradient="to-l from-primary to-b-60" class="py-4 text-2xl text-white border-none rounded-lg cursor-pointer">
              تسجيل
            </button>
          </div>
        </div>
      <div class="mt-12 text-center">
        <span text="xl gray-700 dark:gray-500">
          لديك حساب ؟
        </span>
        <nuxt-link to="/auth/login">
          <span text="xl gray-700 dark:gray-500"> تسجيل الدخول </span>
        </nuxt-link>
      </div>
      </div>
    </div>
</template>

<script></script>

<style>
</style>
