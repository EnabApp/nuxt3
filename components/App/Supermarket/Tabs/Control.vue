<template>
    <div bg="b-20" h="full">
      <div p="2">
        <UiTabGroup :col="true" :tabs="['الفئات', 'المنتجات']">
        <template #tab-1>
          <h1>Home</h1>
        </template>
        <template #tab-2>
          <h1>About</h1>
        </template>
        <template #tab-3>
          <h1>Contact</h1>
        </template>
    </UiTabGroup>
      </div>
    </div>
</template>
