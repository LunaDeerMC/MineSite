<template>
  <div class="min-h-screen bg-white">
    <header class="bg-gray-50 border-b">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <nav class="flex items-center space-x-4 text-sm">
          <NuxtLink to="/" class="text-blue-600 hover:text-blue-800">
            首页
          </NuxtLink>
          <span class="text-gray-400">/</span>
          <span class="text-gray-600">{{ route.params.slug }}</span>
        </nav>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <article class="prose prose-lg mx-auto">
        <h1>{{ pageData.title || '页面标题' }}</h1>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p class="text-yellow-800">
            <strong>开发中:</strong> 页面内容将通过 Prisma 从数据库获取，并使用 Tiptap 渲染区块内容。
          </p>
          <p class="text-sm text-yellow-600 mt-2">
            当前路径: /{{ route.params.slug }}
          </p>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
const route = useRoute()

// 模拟页面数据 - 实际应从数据库获取
const pageData = ref({
  title: `页面: ${route.params.slug}`,
  status: 'published',
  blocks: []
})

// 页面SEO设置
useHead({
  title: `${pageData.value.title} - MineSite`,
  meta: [
    { name: 'description', content: `MineSite 页面: ${route.params.slug}` }
  ]
})

// TODO: 实际实现中应该：
// 1. 从数据库获取页面数据
// 2. 检查页面状态（已发布/草稿）
// 3. 渲染 Tiptap 区块内容
// 4. 处理 404 页面
</script>