<script setup>

  import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
  import {Badge} from '@/components/ui/badge'

  const props = defineProps({
    items: Object
  });

</script>

<template>
  <Accordion v-if="items" type="single" collapsible default-value="Аккордеон">
    <AccordionItem :key="item.content_id" :value="item.content_id" v-for="item in props.items.data">
      <AccordionTrigger class="text-slate-100 h-8">
        {{ item.content_title }}
        <Badge variant="destructive"> {{ item.tag }} <Icon class="ml-2" name="uil:github" color="white" /> </Badge>
      </AccordionTrigger>
      <AccordionContent class="text-slate-100">
        {{ item.content_text }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

