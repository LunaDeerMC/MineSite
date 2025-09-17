# 技术栈说明（Vue + Nuxt 3）

本项目以前后端一体的 Nuxt 3 为核心，围绕内容展示与后台管理的场景进行构建。选用组件如下：Vue、Nuxt 3、Naive UI、Tailwind CSS、Tiptap、Prisma、PostgreSQL、Resend、@nuxtjs/i18n。

## 项目目录结构

```
MineSite/
├── assets/
│   └── css/                 # 样式文件
│       ├── main.css         # 主样式文件
│       └── tailwind.css     # Tailwind CSS 配置
├── components/
│   └── ui/                  # UI 组件
│       └── TiptapEditor.vue # Tiptap 编辑器组件
├── composables/             # Vue 组合式函数
├── layouts/                 # 布局文件
├── locales/                 # 国际化文件
│   ├── en.json              # 英文翻译
│   └── zh.json              # 中文翻译
├── middleware/              # 中间件
│   └── admin.ts             # 管理后台访问控制
├── pages/                   # 页面文件（自动路由）
│   ├── admin/               # 管理后台页面
│   │   └── index.vue        # 后台首页
│   ├── index.vue            # 首页
│   └── [slug].vue           # 动态页面路由
├── plugins/                 # 插件
│   └── naive-ui.client.ts   # Naive UI 插件配置
├── prisma/                  # 数据库相关
│   └── schema.prisma        # Prisma 数据模型
├── public/                  # 静态资源
├── server/
│   └── api/                 # 服务端 API
│       └── pages/           # 页面相关 API
│           ├── index.ts     # 页面列表和创建
│           └── [slug].ts    # 单页面 CRUD
├── utils/                   # 工具函数
│   ├── prisma.ts            # Prisma 客户端配置
│   └── resend.ts            # Resend 邮件服务
├── .env.example             # 环境变量示例
├── i18n.config.ts           # 国际化配置
├── nuxt.config.ts           # Nuxt 3 配置
├── tailwind.config.js       # Tailwind CSS 配置
└── technical.md             # 技术栈说明文档
```

## 组件清单与作用

| 组件 | 角色定位 | 在项目中的作用 | 备注/整合点 |
|---|---|---|---|
| Vue 3 | UI 渲染层 | 组合式 API 构建组件、响应式状态 | 与 Nuxt 的服务端组件/客户端组件协作 |
| Nuxt 3 | 全栈框架 | 路由、SSR/SSG/ISR、Nitro server、server/api | pages/、server/api/、middleware/；统一构建与部署 |
| Naive UI | 管理端 UI 组件库 | 表格、表单、弹窗、菜单、通知等 | 与 Tailwind 配合使用，快速搭后台 |
| Tailwind CSS | 原子化样式 | 设计系统与布局样式 | 搭配 @tailwindcss/typography 等插件 |
| Tiptap (Vue) | 富文本/区块编辑器 | 后台编辑内容（所见即所得、可扩展） | 支持图片、链接、列表、代码块等；可扩展自定义节点 |
| Prisma | ORM | 数据建模、迁移、类型安全数据库访问 | prisma/schema.prisma 管理模型与关系 |
| PostgreSQL | 数据库 | 存储用户、页面、区块、媒体元信息、版本等 | JSONB 适合存 Block 的 data 字段 |
| Resend | 邮件服务 | 系统邮件（发布通知、重置密码、审核流通知） | 使用 API Key；支持模板与自定义 sender |
| @nuxtjs/i18n | 国际化 | 多语言路由与文案管理 | 路由前缀、SEO、切换语言；内容层多语言需配合数据模型 |

## 架构与数据流（概要）

- 前台展示
  - Nuxt pages/[slug].vue 渲染已发布页面；可用 SSG/ISR 提升性能与 SEO。
- 管理后台
  - /pages/admin/** 下构建页面与内容管理界面（Naive UI + Tailwind）。
  - 使用 Tiptap 编辑内容区块，保存为结构化数据（Block.type + data JSON）。
- 服务端 API（server/api/**）
  - 使用 Prisma 访问 PostgreSQL，提供页面/区块 CRUD、发布、预览、版本回滚等接口。
- 国际化
  - @nuxtjs/i18n 处理路由与文案；内容层通过模型支持多语言字段或 JSONB 多语言映射。
- 邮件
  - 关键事件（发布成功、审核通过）通过 Resend 发送邮件通知。

## 关键集成要点

- Nuxt 3
  - 路由：pages/ 自动路由；middleware 保护 /admin（需后续接入鉴权）。
  - 数据获取：server/api/** 为后端接口；前端使用 useFetch/$fetch 调用。
  - 生成策略：静态页面用 prerender + ISR；发布后触发路径重验证。
- Naive UI + Tailwind
  - Naive UI 提供交互组件，Tailwind 负责布局与样式细节，避免样式冲突即可良好共存。
- Tiptap
  - 作为后台编辑器核心；输出结构化 JSON。建议定义区块枚举（hero、rich_text、gallery 等）与 data 的 schema 校验。
- Prisma + PostgreSQL
  - 典型模型：Page(id, slug, title, status, publishedAt)、Block(id, pageId, type, order, data JSONB)、Revision（快照）。
  - 使用 Prisma Migrate 管理 schema 版本；生产建议 Postgres 托管（Neon/Supabase/RDS）。
- Resend
  - 使用官方 Node SDK；在发布/审核 API 中调用发送邮件。注意将 API Key 放入 Nuxt runtimeConfig.private。
- @nuxtjs/i18n
  - 路由策略：prefix 或 prefix_except_default。
  - 内容多语言两种方式：每条记录多语言字段（title_zh/title_en…）或 JSONB translations { zh: {}, en: {} }。

## 环境变量与配置建议

- 数据库
  - DATABASE_URL=postgres://user:pass@host:port/db
- Nuxt runtimeConfig（示例）
  - NUXT_PRIVATE_RESEND_API_KEY
  - NUXT_PUBLIC_SITE_URL（用于链接与邮件模板）
  - NUXT_I18N_DEFAULT_LOCALE, NUXT_I18N_LOCALES
- 构建与部署
  - Node 18+；CI 中执行 prisma migrate deploy
  - 若使用无服务器 Postgres，建议开启连接池（如 pgbouncer/Neon pool）

## 开发与部署流程（简版）

### 环境准备

1. **系统要求**
   - Node.js 18+
   - PostgreSQL 数据库
   - npm 或 yarn 包管理器

2. **项目安装**
   ```bash
   # 克隆项目
   git clone <repository-url>
   cd MineSite

   # 安装依赖
   npm install

   # 复制环境变量配置
   cp .env.example .env
   ```

3. **环境配置**
   编辑 `.env` 文件，配置以下变量：
   ```env
   DATABASE_URL="postgres://user:password@localhost:5432/minesite"
   NUXT_PRIVATE_RESEND_API_KEY="your-resend-api-key"
   NUXT_PUBLIC_SITE_URL="http://localhost:3000"
   NUXT_I18N_DEFAULT_LOCALE="zh"
   NUXT_I18N_LOCALES="zh,en"
   ```

4. **数据库初始化**
   ```bash
   # 生成 Prisma 客户端
   npx prisma generate

   # 运行数据库迁移
   npx prisma migrate dev --name init

   # （可选）查看数据库
   npx prisma studio
   ```

5. **启动开发服务器**
   ```bash
   npm run dev
   ```

### 开发流程

- **建模**：定义 Prisma schema 并迁移
- **后台**：Naive UI + Tiptap 完成编辑页
- **API**：server/api/pages/** 完成 CRUD/发布/版本
- **i18n**：配置 locales 与路由策略，完善内容模型的多语言字段

### 测试/发布

- **单元与端到端测试**可用 Vitest/Playwright（可选）
- **CI**：安装依赖 → 构建 → prisma migrate deploy → 部署（Vercel/自托管 Node）
- **发布后**调用 nitro 的 revalidate 逻辑或触发前台路径重算

