<template>
    <div class="flex items-center justify-center h-screen">
        <div class="bg-center bg-cover ">
            <div class="justify-center ">
                <div bg="w-100" dark:bg-gradient="to-r from-black to-b-90" class="mx-auto border rounded-lg shadow-sm w-100 ">
                    <div class="flex flex-col m-10 text-right">
                        <div>
                            <h1  text="black dark:white">
                                تسجيل الدخول
                            </h1>
                            <span text="gray-700 dark:gray-500">
                                مرحبا بك من جديد
                            </span>
                        </div>
                        <div class="flex flex-col mt-5 space-y-6">
                            <UiInput v-model="model" icon="i-clarity-email-solid dark:text-gray-400" label="البريد الالكتروني"
                                placeholder="ادخل البريد الالكتروني" type="text" />
                            <UiInput v-model="model" icon="i-clarity-lock-solid dark:text-gray-400" label="كلمة السر "
                                placeholder="ادخل كلمة السر" type="password" />
                            <div class="flex flex-row justify-between mt-3">
                                <div class="flex items-center">
                                    <input id="remember_me" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
                                    <label for="remember_me" text="gray-700 dark:gray-500"
                                        class="mr-2 text-sm font-medium ">
                                        تذكرني
                                    </label>
                                </div>
                                <a text="gray-700 dark:gray-500" href="#">
                                    نسيت كلمة السر ؟
                                </a>
                            </div>
                            <button bg="primary" dark:bg-gradient="to-l from-primary to-b-60" class="py-2 text-lg text-white border-none rounded-lg cursor-pointer ">تسجيل
                                دخول</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>
</style>