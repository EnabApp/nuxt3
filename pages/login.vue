<template>
    <div class="flex justify-center items-center h-screen">
        <div class=" bg-white bg-cover bg-center ">
            <div class=" justify-center">
                <div class=" mx-auto w-100 bg-white  rounded-lg shadow-sm ">
                    <div class="flex flex-col text-right m-10">
                        <div>
                            <h1>
                                تسجيل الدخول
                            </h1>
                            <span>
                                مرحبا بكل من جديد
                            </span>
                        </div>
                        <div class="flex flex-col mt-5 space-y-2">
                            <UiInput v-model="model" w="80" icon="i-clarity-email-solid" label="البريد الالكتروني"
                                placeholder="ادخل البريد الالكتروني" type="text" />
                            <UiInput v-model="model" w="80" icon="i-clarity-lock-solid" label="كلمة السر "
                                placeholder="ادخل كلمة السر" type="password" />
                            <div class="flex flex-row justify-between mt-3">
                                <a href="#">
                                    نسيت كلمة السر ؟
                                </a>
                                <div class="flex items-center">
                                    <label for="link-checkbox"
                                        class="ml-2 text-sm font-medium text-gray-900 ">
                                        تذكرني
                                    </label>
                                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500   focus:ring-2 ">
                                </div>
                            </div>
                            <button bg="primary" class="py-2 text-lg text-white border-none rounded-lg ">تسجيل
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