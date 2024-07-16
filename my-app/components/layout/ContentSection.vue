<template>
  <WidgetContentCard @update:list="fetchContentList" v-if="data" :items="data" title="Тест" content="Тест"/>
</template>

<script setup> 

import WidgetContentCard from '../widgets/ContentCard.vue'

let data = await useMyFetch('/content/list');

const props = defineProps({
  content: String,
})


const fetchContentList = async function () {
  console.log('fetch_used');
  let data = await useMyFetch('/content/list');
  // console.log(data);
}

onMounted(() => {
  fetchContentList();
});

</script>