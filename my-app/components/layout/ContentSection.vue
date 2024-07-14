<template>
  <WidgetContentCard :items="data" title="Тест" content="Тест"/>
</template>

<script setup> 

import WidgetContentCard from '../widgets/ContentCard.vue'

let data = await useMyFetch('/content/list');
console.log(data);
</script>