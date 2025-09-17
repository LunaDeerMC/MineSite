# MineSite

基于 Nuxt 3 的现代内容管理系统，采用全栈架构，支持多语言和富文本编辑。

## 技术栈

- **前端框架**: Vue 3 + Nuxt 3
- **UI 组件库**: Naive UI + Tailwind CSS
- **富文本编辑**: Tiptap
- **数据库**: PostgreSQL + Prisma ORM
- **邮件服务**: Resend
- **国际化**: @nuxtjs/i18n

## 快速开始

### 环境要求

- Node.js 18+
- PostgreSQL 数据库
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd MineSite
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   ```bash
   cp .env.example .env
   ```
   
   编辑 `.env` 文件，配置必要的环境变量：
   - `DATABASE_URL`: PostgreSQL 连接字符串
   - `NUXT_PRIVATE_RESEND_API_KEY`: Resend 邮件服务 API 密钥
   - `NUXT_PUBLIC_SITE_URL`: 站点公共访问地址

4. **初始化数据库**
   ```bash
   # 生成 Prisma 客户端
   npx prisma generate
   
   # 运行数据库迁移
   npx prisma migrate dev --name init
   ```

5. **启动开发服务器**
   ```bash
   npm run dev
   ```

   访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
MineSite/
├── assets/css/              # 样式文件
├── components/ui/           # UI 组件
├── locales/                 # 国际化文件
├── middleware/              # 中间件
├── pages/                   # 页面文件（自动路由）
│   ├── admin/              # 管理后台
│   └── [slug].vue          # 动态页面
├── plugins/                 # 插件配置
├── prisma/                  # 数据库 schema
├── server/api/              # 服务端 API
└── utils/                   # 工具函数
```

## 开发指南

### 页面管理

- 访问 `/admin` 进入管理后台
- 支持页面的创建、编辑、发布和删除
- 使用 Tiptap 编辑器进行富文本内容编辑

### API 接口

- `GET /api/pages` - 获取页面列表
- `POST /api/pages` - 创建新页面
- `GET /api/pages/[slug]` - 获取特定页面
- `PUT /api/pages/[slug]` - 更新页面
- `DELETE /api/pages/[slug]` - 删除页面

### 多语言支持

项目支持中英文双语：
- 默认语言：中文
- 路由策略：中文为默认路径，英文使用 `/en` 前缀

## 构建部署

```bash
# 构建生产版本
npm run build

# 生成静态文件
npm run generate

# 预览构建结果
npm run preview
```

## 许可证

本项目基于 GPL-3.0 许可证开源。

## 更多信息

详细的技术栈说明请参考 [technical.md](./technical.md) 文档。
