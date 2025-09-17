// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'zh', name: '中文' },
      { code: 'en', name: 'English' }
    ],
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts'
  },

  runtimeConfig: {
    // Private runtime config (only available on server-side)
    privateResendApiKey: process.env.NUXT_PRIVATE_RESEND_API_KEY,
    
    // Public runtime config (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      i18nDefaultLocale: process.env.NUXT_I18N_DEFAULT_LOCALE || 'zh',
      i18nLocales: process.env.NUXT_I18N_LOCALES || 'zh,en'
    }
  },

  nitro: {
    experimental: {
      wasm: true
    }
  }
})
