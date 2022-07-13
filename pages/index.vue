<template>
  <div class="w-1/2 m-5">
    <UiInput class="w-60" icon="i-clarity-email-solid" label="البريد الالكتروني" placeholder="Enter your email" type="email" />
    
    <Teleport to="body">
      <UiModal v-model:state="stateModal" @confirm="modalConfirmed" @cancel="modalCanceled">
        <template v-slot:title>Hello, vue-final-modal</template>
        <p>Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.</p>
      </UiModal>
    </Teleport>

    <button @click="showModal()">Open modal</button>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

const [stateModal, showModal] = useToggle(false);

const modalConfirmed = () => {
  console.log("Confirmed");
  stateModal.value = false;
};
const modalCanceled = () => {
  console.log("Canceled");
  stateModal.value = false;
};
</script>