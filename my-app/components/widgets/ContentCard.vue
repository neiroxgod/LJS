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

let OPEN_MODAL = ref(false);

const TAGS_OBJECT = [
  {
    alias: 'JS',
    value: 'vscode-icons:file-type-js-official',
    icon: 'vscode-icons:file-type-js-official',
  },
  {
    alias: 'TS',
    value: 'vscode-icons:file-type-typescript-official',
    icon: 'vscode-icons:file-type-typescript-official',
  },
  {
    alias: 'Vue',
    value: 'vscode-icons:file-type-vue',
    icon: 'vscode-icons:file-type-vue',
  },
  {
    alias: 'Окружение',
    value: 'vscode-icons:file-type-docker',
    icon: 'vscode-icons:file-type-docker',
  },
  {
    alias: 'SOFT',
    value: 'vscode-icons:file-type-jenkins',
    icon: 'vscode-icons:file-type-jenkins',
  },
];

const TAGS = [
  {
    alias: 'Для собеседования',
    value: 'Для собеседования',
  },
  {
    alias: 'Развитие',
    value: 'Развитие',
  },
  {
    alias: 'Важно',
    value: 'Важно',
  },
  {
    alias: 'Окружение',
    value: 'Окружение',
  },
  {
    alias: 'SOFT',
    value: 'SOFT',
  },
];



const EditContent = async function (content_id) {
  const {data, pending, error} = await useFetch('http://127.0.0.1:3000/content/get/' + content_id, {
    method: 'POST',
    body: FormData,
  })


}

const emit = defineEmits(['update:List'], ['update:Item']);
</script>

<template>
  <Button @click="OPEN_MODAL = !OPEN_MODAL; console.log(OPEN_MODAL);"> Модалка </Button>

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
            <Dialog class="" v-model:open="OPEN_MODAL">
              <DialogTrigger asChild>
                <Badge @click="EditContent(item.content_id)" variant="secondary" class="mr-2 pb-1 pl-2 pr-2 pt-1">
                  <Icon name="material-symbols:edit-square" class="h-4 w-4 border align-middle" />
                  <Label class="ml-2"> Редактировать </Label>
                </Badge>
              </DialogTrigger>
              <DialogContent class="w-full border-0 bg-slate-800 text-white shadow-xl shadow-slate-900">
                <DialogHeader>
                  <DialogTitle class="mb-3 text-slate-200">Создать статью</DialogTitle>
                  <DialogDescription>
                    <div class="mb-2 flex justify-between">
                      <div class="mr-2 w-full">
                        <Label>Название статьи</Label>
                        <Input type="text" placeholder="Введите что нибудь)" />
                      </div>
                      <div class="w-full">
                        <Label>Описание статьи</Label>
                        <Input type="text"  placeholder="Введите что нибудь)" />
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="mr-2 w-full">
                        <Label>Тэги</Label>
                        <SharedSelect  
                          label="Теги" 
                          placeholder="Укажите тэг" 
                          :options="TAGS" 
                        />
                      </div>
                      <div class="w-full">
                        <Label>Направление</Label>
                        <SharedSelect
                          label="Направление"
                          placeholder="Укажите направление"
                          :options="TAGS_OBJECT"
                        />
                      </div>
                    </div>
                  </DialogDescription>
                  <WidgetsTipTapEditor/>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose as-child>
                    <Button class="text-slate-900" @click="submitCreateContent" variant="outline">Создать</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

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
