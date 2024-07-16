<template>
  <WidgetContentCard v-if="data" :items="data" title="Тест" content="Тест"/>
</template>

<script setup lang="ts"> 

  import WidgetContentCard from '../widgets/ContentCard.vue'

  const props = defineProps({
    content: Object,
  })

  const data = ref(await useMyFetch('/content/list'))

  watch(() => props.content, (newContent) => {
     if (newContent) {
       data.value.data.push(newContent);
       console.log(data.value.data);
     }
  });
</script>