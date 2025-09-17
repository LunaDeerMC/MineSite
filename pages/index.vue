<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <h1 class="text-3xl font-bold text-gray-900">
            {{ $t('welcome') }}
          </h1>
          <div class="flex space-x-4">
            <NuxtLinkLocale to="/en" v-if="$i18n.locale === 'zh'">English</NuxtLinkLocale>
            <NuxtLinkLocale to="/" v-else>中文</NuxtLinkLocale>
            <NuxtLinkLocale to="/admin">{{ $t('admin.title') }}</NuxtLinkLocale>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
          <div class="flex items-center justify-center h-full">
            <p class="text-gray-500 text-lg">
              MineSite - Nuxt 3 项目已准备就绪
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// 页面SEO设置
useHead({
  title: 'MineSite - 首页',
  meta: [
    { name: 'description', content: '基于 Nuxt 3 的内容管理系统' }
  ]
})
</script>