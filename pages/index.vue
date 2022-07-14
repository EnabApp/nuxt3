<template>
  <div w="1/2" m="5">
    <UiInput v-model="showName" w="96" icon="i-clarity-email-solid" label="Show name" placeholder="Show Name" type="text">
        <button @click="search()">Search</button>
    </UiInput>

    <UiDropdown v-model="dropdown" :list="list" w="96" />
    {{ dropdown }}

    <Teleport to="body">
      <UiModal v-model:state="stateModal" @confirm="modalConfirmed" @cancel="modalCanceled">
        <template v-slot:title>Modal Title</template>
        Name : {{modalData.name}}
        <img :src="modalData.image.original" />
      </UiModal>
    </Teleport>

    <button @click="toggleModal()">Open modal</button>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Home",
});

const dropdown = ref(null);
const showName = ref(null);


const { data, pending, error, refresh: search } = await useAsyncData(
  'getShows',
  () => $fetch(`https://api.tvmaze.com/search/shows?q=${showName.value}`)
)

const list = computed(() => {
  return data?.value?.map(item => {
    return {
      id: item.show.id,
      value: item.show.name
    }
  })
})

const modalData = computed(() => {
  const showId = dropdown.value
  return data?.value?.find(item => item.show.id == showId).show
})

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