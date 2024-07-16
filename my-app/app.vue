<template>
  <div class="bg-slate-900 h-screen mx-auto">
    <NuxtRouteAnnouncer/>
    <div class="mx-auto container pt-5">
      <WidgetsCreateContent @added:content="handleContentAdded" class="border border-color-white"/>
      <LayoutContentSection :key="componentKey" class="mt-10 rounded-md"/>
    </div>
  </div>
</template>

<script setup>
  const componentKey = ref(0);

  const handleContentAdded = (newContent) => {
    componentKey.value += 1;
  };
</script>
