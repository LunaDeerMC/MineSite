export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  try {
    switch (method) {
      case 'GET':
        return await getPages()
      case 'POST':
        const body = await readBody(event)
        return await createPage(body)
      default:
        throw createError({
          statusCode: 405,
          statusMessage: 'Method Not Allowed'
        })
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Internal Server Error'
    })
  }
})

async function getPages() {
  // TODO: 实现 Prisma 查询
  // const prisma = new PrismaClient()
  // return await prisma.page.findMany({
  //   include: { blocks: true }
  // })
  
  // 临时返回示例数据
  return [
    {
      id: '1',
      slug: 'example-page',
      title: '示例页面',
      status: 'published',
      publishedAt: new Date().toISOString(),
      blocks: []
    }
  ]
}

async function createPage(data) {
  // TODO: 实现页面创建逻辑
  // 1. 验证数据
  // 2. 使用 Prisma 创建页面
  // 3. 发送邮件通知（使用 Resend）
  
  console.log('Creating page with data:', data)
  
  return {
    success: true,
    message: 'Page created successfully',
    data: {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString()
    }
  }
}