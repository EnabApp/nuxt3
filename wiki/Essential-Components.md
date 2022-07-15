# 1. Input
**Attributes**
1. ``label`` Text up to the input
2. `v-model` A variable so changed value will be set to.
3. `icon` an Iconify icon.
4. `placeholder` A hint-text before typing a value.
5. `type` Default input types. Cases for types:
    - `password` Additional action button will be added to show/hide button.
    - `number` Additional actions buttons (˄, ˅) will be added and it will increase/decrease input value by 1. You can change incremental value by passing `increment` attribute to the input (accepting float/int).


**Slot**

Slot elements will be set to the left of the input. In `Usage` used a button for an action.

**Usage**
```HTML
<UiInput v-model="model" w="96" icon="i-clarity-email-solid" label="Label" placeholder="Placeholder" type="text">
  <!-- Action Buttons -->
  <button>Add</button>
</UiInput>
```

***

# 2. Dropdown

**Attributes**
1. `label` Text up to the input
2. `v-model` A variable so changed value will be set to. If we pass array of objects (id, value) then id will be returned.
3. `icon` an Iconify icon.
4. `placeholder` A hint-text before typing a value.
5. `type` Default input types.
6. `list` Array of objects which has two keys (id, value).
7. `multiple` If we add multiple attribute then user can select multiple items and the data that returned to the model will be as string of array (which need to be parsed to convert it to array data type).

**Slot**

Slot elements will be set to the left of the input. In `Usage` used a button for an action.

**Usage**
```HTML
<UiDropdown v-model="dropdown" :list="[
  {id: 1, value: 'John'},
  {id: 2, value: 'Jane'},
]" label="Select One" placeholder="Type to search" icon="i-bxs-search" multiple w="96">
  <button>Save</button>
</UiDropdown>
```

***

# 3. Modal

**Attributes**
1. `v-model` A variable to reference state of modal.
2. `confirm` When confirm attribute assigned a text then confirm button will show inside modal labeled by the text. 
3. `@confirm` An event listener when confirm button gets clicked it will invoke `modalConfirmed` function.
3. `@cancel` An event listener when cancel button gets clicked it will invoke `modalCanceled` function.

**Slot**

1. `v-slot:title` Modal title.
2. `Default` Content of modal which will appear when modal gets clicked.

**Usage**
```HTML
<Teleport to="body">
  <UiModal v-model="stateModal" confirm="Save" @confirm="modalConfirmed" @cancel="modalCanceled">
    <template v-slot:title>Modal Title</template>
    Content
  </UiModal>
</Teleport>
```
```JavaScript
const [stateModal, toggleModal] = useToggle(false);

const modalConfirmed = () => {
  console.log("Confirmed");
  stateModal.value = false;
};

const modalCanceled = () => {
  console.log("Canceled");
  stateModal.value = false;
};
```