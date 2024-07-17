<template>
  <WidgetContentCard @update:list="removeContent" v-if="data" :items="data" title="Тест" content="Тест"/>
</template>

<script setup> 

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



  const removeContent = function(content_id) {
    data.value.data = data.value.data.filter((item) => item.content_id !== content_id)
  }

</script>