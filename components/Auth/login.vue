<template>
    <div flex="~" items="center" h="166px" w="631px" m="t-66px">
        <div flex="~ col gap-8px" w="276px">
            <UiInput placeholder="رقم الهاتف أو البريد الالكتروني" />
            <UiInput placeholder="كلمة المرور" />
            <button cursor="pointer" un-text="xl" border="rounded-5px" p="14px" bg="primaryOp dark:primary">
                تسجيل الدخول
            </button>
        </div>
        <span un-text="primaryOp dark:primary xl" m="x-30px">أو</span>
        <div flex="~ col gap-8px" w="276px">
            <button cursor="pointer" position="relative" un-text="xl" border="rounded-5px" p="14px" bg="primaryOp dark:primary">
                Google
                <div position="absolute" top="16px" left="24px" w="22px" h="22px" un-text="primary dark:primaryOp" class="i-akar-icons-google-fill"></div>
            </button>
            <button cursor="pointer" position="relative" un-text="xl" border="rounded-5px" p="14px" bg="primaryOp dark:primary">
                Facebook
                <div position="absolute" top="16px" left="24px" w="22px" h="22px" un-text="primary dark:primaryOp" class="i-brandico-facebook"></div>
            </button>
            <button cursor="pointer" position="relative" un-text="xl" border="rounded-5px" p="14px" bg="primaryOp dark:primary">
                Telegram
                <div position="absolute" top="16px" left="24px" w="22px" h="22px" un-text="primary dark:primaryOp" class="i-bxl-telegram"></div>
            </button>
        </div>
    </div>
</template>
