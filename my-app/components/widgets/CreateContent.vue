<script setup lang="ts">
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

const FormData = ref({
  content_title: '',
  content_description: '',
  content_text: '',
  tag: '',
  tag_object: '',
});

const emit = defineEmits(['added:content']);

const OPEN_MODAL = ref(false);

const submitCreateContent = async () => {
  const {data, pending, error} = await useFetch('http://127.0.0.1:3000/content/add', {
    method: 'POST',
    body: FormData,
  })

  console.log(data.value);
  emit('added:content', data.value);

  OPEN_MODAL.value = false;
};
</script>

<template>
  <Dialog class="">
    <DialogTrigger class="fixed right-20">
      <Button variant="default" class="border hover:bg-white hover:text-slate-900">
        Добавить <Icon class="ml-2 align-middle" name="grommet-icons:add" color="white" />
      </Button>
    </DialogTrigger>

    <DialogContent v-model:open="OPEN_MODAL" class="w-full border-0 bg-slate-800 text-white shadow-xl shadow-slate-900">
      <DialogHeader>
        <DialogTitle class="mb-3 text-slate-200">Создать статью</DialogTitle>
        <DialogDescription>
          <div class="mb-2 flex justify-between">
            <div class="mr-2 w-full">
              <Label>Название статьи</Label>
              <Input type="text" v-model="FormData.content_title" placeholder="Введите что нибудь)" />
            </div>
            <div class="w-full">
              <Label>Описание статьи</Label>
              <Input type="text" v-model="FormData.content_description" placeholder="Введите что нибудь)" />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="mr-2 w-full">
              <Label>Тэги</Label>
              <SharedSelect v-model="FormData.tag" label="Теги" placeholder="Укажите тэг" :options="TAGS" />
            </div>
            <div class="w-full">
              <Label>Направление</Label>
              <SharedSelect
                v-model="FormData.tag_object"
                label="Направление"
                placeholder="Укажите направление"
                :options="TAGS_OBJECT"
              />
            </div>
          </div>
        </DialogDescription>
        <WidgetsTipTapEditor v-model="FormData.content_text" />
      </DialogHeader>

      <DialogFooter>
        <DialogClose as-child>
          <Button class="text-slate-900" @click="submitCreateContent" variant="outline">Создать</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
