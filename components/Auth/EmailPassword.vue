<template>
    <div flex="~ col gap-2">
        <!-- ?Email -->
        <UiInput size="lg" v-model="authStore.email" w="190px lg:270px 2xl:320px" placeholder="البريد الإلكتروني" type="email" icon="IconEmail" />

        <!-- ?Password -->
        <UiInput size="lg" v-model="authStore.password" w="190px lg:270px 2xl:320px" placeholder="كلمة المرور" type="password" icon="IconLock" />

        <!-- ?Error Message -->

        <!-- ?Submit -->
        <!-- <div v-if="logIn.email" class="delay-50 duration-200 animate-fade-in" flex="~" justify="center">
            <UiButton @click="login()" rounded="10px" w="140px">
                <div flex="~ gap-15px" justify="center" text="primary dark:primaryOp" items="center">
                    <span>تسجل الدخول</span>
                    <IconLogin w="20px" />
                </div>
            </UiButton>
        </div> -->
    </div>
</template>

<script setup>
const authStore = useAuthStore();
</script>
