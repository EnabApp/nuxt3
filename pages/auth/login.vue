<template>
  <NuxtLayout>
    <div flex="~ col" h="full" justify="center" items="center">
      <div bg="transparent" p="3" w="sm" border="~ rounded-3xl b-10 dark:w-20">
        <div flex="~ col" m="10" text="right">
          <div>
            <h1 text="black dark:white">تسجيل الدخول</h1>
            <span text="b-40 dark:gray-500"> مرحبا بك من جديد </span>
          </div>
          <div class="flex flex-col mt-5 space-y-6">
            <UiInput
              icon="i-clarity-email-solid dark:text-gray-400"
              label="البريد الالكتروني"
              placeholder="ادخل البريد الالكتروني"
              type="text"
            />
            <UiInput
              icon="i-clarity-lock-solid dark:text-gray-400"
              label="كلمة السر "
              placeholder="ادخل كلمة السر"
              type="password"
            />
            <div class="flex flex-row justify-between mt-3">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg focus:ring-blue-500 focus:ring-2"
                />
                <label
                  for="remember_me"
                  text="gray-700 dark:gray-500"
                  class="mr-2 text-sm font-medium"
                >
                  تذكرني
                </label>
              </div>
              <NuxtLink to="/auth/login" class="gray-700 dark:gray-500">
                نسيت كلمة السر ؟
              </NuxtLink>
            </div>
            <div flex="~ col">
              <button
                bg="primary"
                dark:bg-gradient="to-l from-primary to-b-60"
                class="py-2 text-lg text-white border-none rounded-lg cursor-pointer"
              >
                تسجيل دخول
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <span text="gray-700 dark:gray-500" class="text-sm">
          ليس لديك حساب ؟
        </span>
        <nuxt-link to="/auth/register">
          <span text="gray-700 dark:gray-500" class="text-sm"> سجل الان </span>
        </nuxt-link>
      </div>
    </div>
  </NuxtLayout>
</template>

<script></script>

<style></style>
