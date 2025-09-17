<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">
              {{ $t('admin.title') }}
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="text-gray-500 hover:text-gray-700">
              返回首页
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">
              {{ $t('admin.pages') }}
            </h2>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <p class="text-gray-600">
                  页面管理功能将在此实现
                </p>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  {{ $t('admin.create') }}
                </button>
              </div>
              
              <div class="border-t border-gray-200 pt-4">
                <p class="text-sm text-gray-500">
                  TODO: 集成 Naive UI 组件和 Tiptap 编辑器
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用 admin middleware 保护此路由
definePageMeta({
  middleware: 'admin'
})

// 页面SEO设置
useHead({
  title: 'MineSite - 管理后台',
  meta: [
    { name: 'description', content: 'MineSite 内容管理后台' }
  ]
})
</script>