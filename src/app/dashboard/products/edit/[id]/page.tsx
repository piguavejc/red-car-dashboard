import Flex from '@/core/shared/components/layout/flex'
import { SearchByIdProductUseCase } from '@/core/product/aplication/use-case/search-by-id-product.use-case'
import SectionEdit from '@/core/product/components/sections/section-edit'

export default async function ProductEditPage({
  params
}: {
  params: { id: string }
}) {
  const productId = params.id

  const result = await SearchByIdProductUseCase.run(productId)

  if (result.error !== null) {
    return <div>Error</div>
  }

  const product = result.data

  return (
    <Flex className="w-full flex-1 items-stretch">
      <SectionEdit product={product} />
    </Flex>
  )
}
