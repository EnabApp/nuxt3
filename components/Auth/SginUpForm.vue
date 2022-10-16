<template>
    <div>
        <div class="flex flex-col md:flex-row gap-10px">
            <!-- ?Name -->
            <UiInput size="lg" v-model="authStore.name" w="190px lg:270px 2xl:320px" placeholder="الأسم الثلاثي" type="text" icon="IconProfile" />

            <!-- ?Phone Number -->
            <UiInput size="lg" v-model="authStore.phonenumber" w="190px lg:270px 2xl:320px" placeholder="رقم الهاتف" type="text" icon="IconPhone" />
        </div>

        <div class="flex flex-col md:flex-row mt-2 gap-10px">
            <!-- ?Email -->
            <UiInput size="lg" v-model="authStore.email" w="190px lg:270px 2xl:320px" placeholder="البريد الإلكتروني" type="email" icon="IconEmail" />

            <!-- ?Password -->
            <UiInput size="lg" v-model="authStore.password" w="190px lg:270px 2xl:320px" placeholder="كلمة المرور" type="password" icon="IconLock" />
        </div>
    </div>
</template>

<script setup>
const authStore = useAuth();
</script>
