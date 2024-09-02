import Flex from '@/core/shared/components/layout/flex'
import { SearchByIdProductUseCase } from '@/core/product/aplication/use-case/search-by-id-product.use-case'
import { SearchCategoryUseCase } from '@/core/category/aplication/use-case/search-category.use-case'
import { SearchLaboratoryUseCase } from '@/core/laboratory/aplication/use-case/search-laboratory.use-case'
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
  const laboratoryResult = await SearchLaboratoryUseCase.run()
  const categoryResult = await SearchCategoryUseCase.run()

  if (laboratoryResult.error) {
    return <div>{laboratoryResult.error}</div>
  }

  const laboratories = laboratoryResult.data
  const categories = categoryResult.data

  if (laboratories === null || categories === null) {
    return <div>loading...</div>
  }

  const product = result.data

  return (
    <Flex className="w-full flex-1 items-stretch">
      <SectionEdit
        product={product}
        categories={categories}
        laboratories={laboratories}
      />
    </Flex>
  )
}
