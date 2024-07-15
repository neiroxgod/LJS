<script setup lang="ts">
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'

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
]

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
]

</script>

<template>
  <Dialog >
    
    <DialogTrigger class="fixed right-20">
      <Button variant="default" class="border hover:bg-white hover:text-slate-900">
        Добавить <Icon class="ml-2 align-middle" name="grommet-icons:add" color="white" />
      </Button>
    </DialogTrigger>

    <DialogContent class="bg-slate-800 border-0 shadow-xl shadow-slate-900">
      <DialogHeader>
        <DialogTitle class="text-slate-200 mb-3">Создать статью</DialogTitle>
        <DialogDescription>
          <div class="flex justify-between mb-2">
            <div class="w-full mr-2">
              <Label>Название статьи</Label>
              <Input type="text" placeholder="Введите что нибудь)"/>
            </div>
            <div class="w-full">
              <Label>Описание статьи</Label>
              <Input type="text" placeholder="Введите что нибудь)"/>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="w-full mr-2">
              <Label>Тэги</Label>
              <SharedSelect label="Теги" placeholder="Укажите тэг" :options="TAGS"/>
            </div>
            <div class="w-full">
              <Label>Направление</Label>
              <SharedSelect label="Направление" placeholder="Укажите направление" :options="TAGS_OBJECT" />
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button>Создать</Button>
      </DialogFooter>

    </DialogContent>
  </Dialog>
</template>