<template>
    <div flex="~ col" h="full" justify="center" items="center">
      <div bg="w-20" class="backdrop-blur-lg" p="x-3 y-10" w="2xl" h="content" border="~ 2 rounded-3xl w-10 dark:w-20" shadow="2xl b-5">
        <div flex="~ col" m="10" un-text="right">
          <div flex="~ col gap-2">
            <h1 text="5xl b-90 dark:white">تسجيل الدخول</h1>
            <span text="2xl b-40 dark:gray-500"> مرحبا بك من جديد </span>
          </div>
          <div class="flex flex-col mt-10 space-y-6">
            <UiInput icon="i-clarity-email-solid" label="البريد الالكتروني" placeholder="ادخل البريد الالكتروني" type="text" />
            <UiInput icon="i-clarity-lock-solid" label="كلمة السر " placeholder="ادخل كلمة السر" type="password" />
            <div class="flex flex-row justify-between mt-3">
              <div class="flex items-center">
                <input id="remember_me" type="checkbox" class="w-6 h-6 text-blue-600 bg-gray-100 rounded-xl focus:ring-blue-500 focus:ring-2" />
                <label for="remember_me" text="lg gray-700 dark:gray-500" class="mr-2 font-medium">
                  تذكرني
                </label>
              </div>
              <NuxtLink to="/auth/login" class="text-lg gray-700 dark:gray-500">
                نسيت كلمة السر ؟
              </NuxtLink>
            </div>
          </div>
          <div flex="~ col" class="mt-10">
            <button bg="primary" dark:bg-gradient="to-l from-primary to-b-60" class="py-4 text-2xl text-white border-none rounded-lg cursor-pointer">
              تسجيل دخول
            </button>
          </div>
        </div>
      <div class="mt-12 text-center">
        <span text="xl gray-700 dark:gray-500">
          ليس لديك حساب ؟
        </span>
        <nuxt-link to="/auth/register">
          <span text="xl gray-700 dark:gray-500"> سجل الان </span>
        </nuxt-link>
      </div>
      </div>
    </div>
</template>

<script></script>

<style>
</style>
