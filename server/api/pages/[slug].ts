export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const method = getMethod(event)

  try {
    switch (method) {
      case 'GET':
        return await getPageBySlug(slug)
      case 'PUT':
        const body = await readBody(event)
        return await updatePage(slug, body)
      case 'DELETE':
        return await deletePage(slug)
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

async function getPageBySlug(slug: string) {
  // TODO: 实现 Prisma 查询
  // const prisma = new PrismaClient()
  // return await prisma.page.findUnique({
  //   where: { slug },
  //   include: { 
  //     blocks: { orderBy: { order: 'asc' } },
  //     revisions: { take: 5, orderBy: { createdAt: 'desc' } }
  //   }
  // })

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug is required'
    })
  }

  // 临时返回示例数据
  return {
    id: '1',
    slug,
    title: `页面标题 - ${slug}`,
    status: 'published',
    publishedAt: new Date().toISOString(),
    blocks: [
      {
        id: '1',
        type: 'hero',
        order: 1,
        data: {
          title: 'Hero 标题',
          content: '这是一个 hero 区块的内容'
        }
      }
    ]
  }
}

async function updatePage(slug: string, data: any) {
  // TODO: 实现页面更新逻辑
  console.log(`Updating page ${slug} with data:`, data)
  
  return {
    success: true,
    message: 'Page updated successfully'
  }
}

async function deletePage(slug: string) {
  // TODO: 实现页面删除逻辑
  console.log(`Deleting page: ${slug}`)
  
  return {
    success: true,
    message: 'Page deleted successfully'
  }
}