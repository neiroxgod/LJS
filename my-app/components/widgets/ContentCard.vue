<script setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const props = defineProps({
  items: Object,
});

const deleteContent = function (content_id) {
  const request = useMyFetch('/content/delete/' + content_id, {
    method: 'DELETE',
  });

  emit('update:list', content_id);
};

const emit = defineEmits('update:List');
</script>

<template>
  <Accordion class="bg-slate-200 text-slate-900" v-show="items" type="single" collapsible default-value="Аккордеон">
    <AccordionItem
      :v-if="item.content_id"
      class="text-slate-900"
      :key="item.content_id"
      :value="item.content_id"
      v-for="item in props.items.data"
    >
      <AccordionTrigger class="h-8 text-slate-900">
        <div class="flex align-middle">
          <Icon class="mr-2 align-middle" :name="item.tag_object" color="white" /> {{ item.content_title }}
        </div>
        <div class="flex">
          <Badge variant="secondary" class="mr-2 pb-1 pl-2 pr-2 pt-1">
            <Icon name="material-symbols:edit-square" class="h-4 w-4 border align-middle" />
            <Label class="ml-2"> Редактировать </Label>
          </Badge>
          <Badge
            @click="deleteContent(item.content_id)"
            variant="destructive"
            class="cursor-pointer pb-1 pl-2 pr-2 pt-1"
          >
            <Icon name="material-symbols:delete-forever-rounded" class="h-4 w-4 cursor-pointer border align-middle" />
            <Label class="ml-2 cursor-pointer"> Удалить </Label>
          </Badge>
        </div>
        <!-- <Badge variant="destructive"> {{ item.tag }}  </Badge> -->
      </AccordionTrigger>
      <AccordionContent class="tiptap" v-html="item.content_text"> </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
