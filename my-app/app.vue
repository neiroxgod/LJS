<template>
  <div class="mx-auto h-fit min-h-screen bg-slate-900">
    <NuxtRouteAnnouncer />
    <div class="container mx-auto pt-5">
      <WidgetsCreateContent @added:content="handleContentAdded" class="border-color-white border" />
      <LayoutContentSection :content="content" class="mt-10 rounded-md" />
    </div>
  </div>
</template>

<script setup>
let content = ref([]);
const handleContentAdded = (newContent) => {
  content.value = newContent;
};
</script>
