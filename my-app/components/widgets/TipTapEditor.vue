<template>
  <div>
    <div class="mt-5" v-if="editor">
      <ToggleGroup class="mb-2 overflow-x-auto rounded-md bg-white text-slate-900" type="multiple">
        <ToggleGroupItem
          @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          value="bold"
          aria-label="Toggle bold"
        >
          <FontBoldIcon class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          value="italic"
          aria-label="Toggle italic"
        >
          <FontItalicIcon class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
          value="Strike"
          aria-label="Toggle strike"
        >
          <Icon name="material-symbols-light:format-strikethrough" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleCode().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
          value="code"
          aria-label="Toggle code"
        >
          <CodeIcon class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem @click="addImage" value="image" aria-label="Toggle image">
          <Icon name="mdi:image-frame" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem @click="addVideo" value="image" aria-label="Toggle video">
          <Icon name="mdi:image-frame" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }"
          value="clear paragraph"
          aria-label="Toggle paragraph"
        >
          <Icon name="material-symbols-light:format-paragraph" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          value="clear h1"
          aria-label="Toggle h1"
        >
          <Icon name="mdi:format-header-1" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          value="clear h2"
          aria-label="Toggle h2"
        >
          <Icon name="mdi:format-header-2" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          value="clear h3"
          aria-label="Toggle h3"
        >
          <Icon name="mdi:format-header-3" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
          value="clear h4"
          aria-label="Toggle h4"
        >
          <Icon name="mdi:format-header-4" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
          value="clear h5"
          aria-label="Toggle h5"
        >
          <Icon name="mdi:format-header-5" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
          value="clear h6"
          aria-label="Toggle h6"
        >
          <Icon name="mdi:format-header-6" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          value="clear bullet list"
          aria-label="Toggle bullet list"
        >
          <Icon name="mdi:format-list-checkbox" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          value="clear ordered list"
          aria-label="Toggle ordered list"
        >
          <Icon name="mdi:format-list-numbered" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          value="clear code block"
          aria-label="Toggle code block"
        >
          <CodeIcon class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          value="clear blockquote"
          aria-label="Toggle blockquote"
        >
          <Icon name="mdi:comment-quote-outline" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().chain().focus().undo().run()"
          value="clear undo"
          aria-label="Toggle undo"
        >
          <Icon name="mdi:undo-variant" class="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().chain().focus().redo().run()"
          value="clear redo"
          aria-label="Toggle redo"
        >
          <Icon name="mdi:redo-variant" class="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
    <TiptapEditorContent class="rounded border text-white" :editor="editor" />
  </div>
</template>

<script setup>
import { FontBoldIcon, FontItalicIcon, CodeIcon } from '@radix-icons/vue';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import Image from '@tiptap/extension-image';
import Heading from '@tiptap/extension-heading';
import Youtube from '@tiptap/extension-youtube';

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  editorProps: {
    attributes: {
      class: cn(
        'prose max-w-none [&_ol]:list-decimal bg-white text-slate-900 [&_ul]:list-disc border-white p-4 overflow-y-auto h-96',
      ),
    },
    transformPastedText(text) {
      return text.toUpperCase();
    },
  },
  content: '<div class="tiptap">' + props.modelValue + '</div>',
  onUpdate: ({ editor }) => {
    console.log(editor.getHTML());
    emit('update:modelValue', editor.getHTML());
  },
  extensions: [
    TiptapStarterKit,
    Image,
    Heading.configure({
      levels: [1, 2, 3, 4, 5, 6],
    }),
    Youtube.configure({
      controls: false,
      nocookie: true,
    }),
  ],
});

const addImage = function () {
  const url = window.prompt('URL');
  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run();
  }
};

const addVideo = function () {
  const url = prompt('Enter YouTube URL');
  editor.value.commands.setYoutubeVideo({
    src: url,
    width: Math.max(320, parseInt(editor.width, 10)) || 640,
    height: Math.max(180, parseInt(editor.height, 10)) || 480,
  });
};

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>

<style>
/* Basic editor styles */

/* Heading styles */
.tiptap h1,
.tiptap h2,
.tiptap h3,
.tiptap h4,
.tiptap h5,
.tiptap h6 {
  line-height: 1.1;
  margin-top: 2.5rem;
  text-wrap: pretty;
}

.tiptap h1,
.tiptap h2 {
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
}

.tiptap h1 {
  font-size: 1.4rem !important;
}

.tiptap h2 {
  font-size: 1.2rem !important;
}

.tiptap h3 {
  font-size: 1.1rem !important;
}

.tiptap h4,
.tiptap h5,
.tiptap h6 {
  font-size: 1rem !important;
}
</style>
