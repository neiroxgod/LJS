<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const TAGS_OBJECT = [
  {
    alias: 'JS',
    icon: 'vscode-icons:file-type-js-official',
  },
  {
    alias: 'TS',
    icon: 'vscode-icons:file-type-typescript-official',
  },
  {
    alias: 'Vue',
    icon: 'vscode-icons:file-type-vue',
  },
  {
    alias: 'Окружение',
    icon: 'vscode-icons:file-type-docker',
  },
  {
    alias: 'SOFT',
    icon: 'vscode-icons:file-type-jenkins',
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
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="Для собеседования">
                      Для собеседования
                    </SelectItem>
                    <SelectItem value="Скрининг">
                      Скрининг
                    </SelectItem>
                    <SelectLabel>Айтишка</SelectLabel>
                    <SelectItem value="Развитие">
                      Развитие
                    </SelectItem>
                    <SelectItem value="Важно">
                      Важно
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div class="w-full">
              <Label>Направление</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem v-for="tag in TAGS_OBJECT" :value="tag.icon">
                      <Icon size="20" class="align-middle" :name="tag.icon" color="white"/>
                      {{ tag.alias }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <WidgetsTipTapEditor/>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button>Создать</Button>
      </DialogFooter>

    </DialogContent>
  </Dialog>
</template>