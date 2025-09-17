<template>
  <ClientOnly>
    <div class="tiptap-editor">
      <!-- Tiptap 编辑器将在这里集成 -->
      <div class="border border-gray-300 rounded-lg p-4 min-h-[200px]">
        <p class="text-gray-500 italic">
          Tiptap 富文本编辑器组件（待实现）
        </p>
        <div class="mt-4 space-y-2">
          <p class="text-sm text-gray-600">支持的功能：</p>
          <ul class="text-sm text-gray-600 list-disc ml-6">
            <li>富文本编辑</li>
            <li>区块化内容（hero、rich_text、gallery 等）</li>
            <li>图片上传</li>
            <li>链接插入</li>
            <li>代码块</li>
          </ul>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
// TODO: 集成 Tiptap
// import { useEditor, EditorContent } from '@tiptap/vue-3'
// import StarterKit from '@tiptap/starter-kit'

const props = defineProps<{
  modelValue?: any
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: any]
}>()

// const editor = useEditor({
//   content: props.modelValue,
//   extensions: [StarterKit],
//   onUpdate: ({ editor }) => {
//     emit('update:modelValue', editor.getJSON())
//   }
// })
</script>