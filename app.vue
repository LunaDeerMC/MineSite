<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
// Global page setup
useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'MineSite - 基于 Nuxt 3 的内容管理系统' }
  ]
})
</script>
