<template>
  <div w="1/2" m="5">
    <UiInput w="96" icon="i-clarity-email-solid" label="البريد الالكتروني" placeholder="Enter your email" type="email">
        <button >Button</button>
    </UiInput>

    <Teleport to="body">
      <UiModal v-model:state="stateModal" @confirm="modalConfirmed" @cancel="modalCanceled">
        <template v-slot:title>Hello, vue-final-modal</template>
        <p>Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.</p>
      </UiModal>
    </Teleport>

    <button @click="toggleModal()">Open modal</button>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

const [stateModal, toggleModal] = useToggle(false);

const modalConfirmed = () => {
  console.log("Confirmed");
  stateModal.value = false;
};

const modalCanceled = () => {
  console.log("Canceled");
  stateModal.value = false;
};
</script>