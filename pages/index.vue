<template>
  <div m="5">
    <UiSwitch
      v-model="switcher"
      :list="[
        { id: '1', value: 'Dog', icon: 'i-clarity-email-solid' },
        { id: '2', value: 'Cat', icon: 'i-clarity-email-solid' },
        { id: '3', value: 'Lizard', icon: 'i-clarity-email-solid' },
        { id: '4', value: 'Shark', icon: 'i-clarity-email-solid' },
      ]"
    />

    <UiInput
      increment="1.5"
      v-model="test"
      w="96"
      icon="i-clarity-email-solid"
      label="Show name"
      type="number"
    />

    <UiDropdown
      label="Select One"
      placeholder="Type to search"
      multiple
      v-model="dropdown"
      :list="[
        { id: 1, value: 'John' },
        { id: 2, value: 'Jane' },
      ]"
      w="96"
    >
      <button>Save</button>
    </UiDropdown>

    <Teleport to="body">
      <UiModal
        v-model="stateModal"
        confirm="Save"
        @confirm="modalConfirmed"
        @cancel="modalCanceled"
      >
        <template v-slot:title>Modal Title</template>
        Content
      </UiModal>
    </Teleport>
    <button @click="toggleModal()">Open modal</button>


    <!-- Sidebar -->
    <ClientOnly>
      <Teleport to="#sidebar">
        <UiSidebar v-model="stateSidebar">
          Content
        </UiSidebar>
      </Teleport>
    </ClientOnly>

    <button @click="toggleSidebar()">Open sidebar</button>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

const test = ref("0");
watch(test, (value) => {
  console.log(value);
});

const switcher = ref();

const dropdown = ref(null);

watch(
  () => switcher.value,
  (value) => {
    console.log(JSON.parse(value));
  }
);

const [stateModal, toggleModal] = useToggle(false);

const [stateSidebar, toggleSidebar] = useToggle(false);

const modalConfirmed = () => {
  console.log("Confirmed");
  stateModal.value = false;
};

const modalCanceled = () => {
  console.log("Canceled");
  stateModal.value = false;
};
</script>
