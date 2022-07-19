<template>
  <div m="5">
    <UiSwitch v-model="switcher" :list="[
      { id: '1', value: 'Dog', icon: 'i-clarity-email-solid' },
      { id: '2', value: 'Cat', icon: 'i-clarity-email-solid' },
      { id: '3', value: 'Lizard', icon: 'i-clarity-email-solid' },
      { id: '4', value: 'Shark', icon: 'i-clarity-email-solid' },
    ]" />

    <UiInput  increment="1.5" v-model="test" w="96" label="Show name" />

    <UiDropdown label="Select One" placeholder="Type to search" multiple v-model="dropdown" :list="[
      { id: 1, value: 'John' },
      { id: 2, value: 'Jane' },
    ]" w="96">
      <button>Save</button>
    </UiDropdown>

    <Teleport to="body">
      <UiModal  v-model="stateModal" confirm="Save" @confirm="modalConfirmed" @cancel="modalCanceled">
        <template  v-slot:title>Modal Title</template>
        <p class="text-white dark:text-w-80">
          Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.


        </p>
      </UiModal>
    </Teleport>
    <button @click="toggleModal()">Open modal</button>
    <div bg="primary-600">
      <span  text="t-60">
        dfsdfsdfsdfsdf2
      </span>
    </div>

    <!-- Sidebar -->
    <ClientOnly>
      <Teleport  to="#sidebar">
        <UiSidebar @cancel="sidebarCanceled" v-model="stateSidebar">
          <p class="text-white">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
            
        </UiSidebar>
      </Teleport>
    </ClientOnly>
    <!-- <h1 ref="elModal" :style="style" style="position:fixed" >dccxcxc</h1> -->
    <button  @click="toggleSidebar()">Open sidebar</button>

    <div w="md" h="sm" flex="~" items="center" justify="center" bg="b-5 dark:s-10" border="rounded-lg">
      <span text="b-10  dark:s-20 6xl" font="semibold">Welcome</span>

      <button @click="toggleSidebar()">Open sidebar</button>

      <!-- Butotn -->
      <UiButton title="submittt" solid=true w="96" />
    </div>
  </div>
</template>

<script setup>
import { usePointerSwipe } from '@vueuse/core'

const el = ref(null)
const { isSwiping, direction } = usePointerSwipe(el)
// import { useDraggable } from '@vueuse/core';

definePageMeta({
  title: "Home",
});

const test = ref("0");
watch(test, (value) => {
  console.log(value);
});

const switcher = ref();

// const elModal = ref(null);
// const {style, x, y  } = useDraggable(elModal, {
//   initialValue: { x: 40, y: 40 },
// });
// console.log(x, y);
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
const sidebarCanceled = () => {
  console.log("Canceled");
  stateSidebar.value = false;
};

</script>
