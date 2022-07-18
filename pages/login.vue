<template>
    <div class="flex justify-center items-center h-screen">
        <div class="  bg-cover bg-center ">
            <div class=" justify-center">
                <div bg="w-100" dark:bg-gradient="to-r from-black to-b-90" class="border mx-auto w-100  rounded-lg shadow-sm ">
                    <div class="flex flex-col text-right m-10">
                        <div>
                            <h1  text="black dark:white">
                                تسجيل الدخول
                            </h1>
                            <span text="gray-700 dark:gray-500">
                                مرحبا بك من جديد
                            </span>
                        </div>
                        <div class="flex flex-col mt-5 space-y-6">
                            <UiInput v-model="model" w="80" icon="i-clarity-email-solid dark:text-gray-400" label="البريد الالكتروني"
                                placeholder="ادخل البريد الالكتروني" type="text" />
                            <UiInput v-model="model" w="80" icon="i-clarity-lock-solid dark:text-gray-400" label="كلمة السر "
                                placeholder="ادخل كلمة السر" type="password" />
                            <div class="flex flex-row justify-between mt-3">
                                <a text="gray-700 dark:gray-500" href="#">
                                    نسيت كلمة السر ؟
                                </a>
                                <div class="flex items-center">
                                    <label for="link-checkbox" text="gray-700 dark:gray-500"
                                        class="ml-2 text-sm font-medium  ">
                                        تذكرني
                                    </label>
                                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500   focus:ring-2 ">
                                </div>
                            </div>
                            <button bg="primary" dark:bg-gradient="to-l from-primary to-b-60" class=" cursor-pointer py-2 text-lg text-white border-none rounded-lg ">تسجيل
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