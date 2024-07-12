<template>
    <v-expansion-panels rounded-0>
      <v-expansion-panel>

        <v-expansion-panel-title disable-icon-rotate>
            {{ title }}
            <template v-slot:actions>
              <v-chip variant="outlined" color="blue"> 
                {{ type }} 
                <v-icon v-if="icon" class="ml-2" color="info" :icon="icon"> </v-icon>
              </v-chip>
            </template>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <div class="text-body-2 font-weight-light">
            {{ text }}
          </div>
        </v-expansion-panel-text>

      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>



defineProps({
  title: String,
  text: String,
  subtitle: String,
  variant: String,
  icon: String,
  type: String,
})


</script>