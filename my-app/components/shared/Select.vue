<template>
  <Select>
    <SelectTrigger>
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{label}}</SelectLabel>
        <SelectItem v-for="opt in options" :value="opt.value">
          <Icon v-if="opt.icon" size="20" class="align-middle" :name="opt.icon" color="white"/>
          {{ opt.alias }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup> 

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

  defineProps({
    options: Array,
    label: String,
    placeholder: String,
  })

</script>