<template>
  <v-speed-dial location="top center" transition="fade-transition">

    <template  v-slot:activator="{ props: activatorProps }">
      <v-fab
        class="position-fixed v-fab_item"
        v-bind="activatorProps"
        size="large"
        icon="$vuetify"
      ></v-fab>
    </template>

    <v-btn @click="toggleTheme" icon="mdi-theme-light-dark"></v-btn>
  </v-speed-dial>
</template>

<script setup> 

import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<style scoped>

.v-fab_item{ 
  bottom: 5%;
  right: 5%;
}

</style>