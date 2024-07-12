<template>
  <v-card :title="title" :subtitle="subtitle" :variant="variant" :text="text" />
</template>


<script setup> 

defineProps({
  title: String,
  subtitle: String,
  variant: String,
  text: String
})

</script>