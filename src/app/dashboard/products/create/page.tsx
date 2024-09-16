import Flex from '@/core/shared/components/layout/flex'
import { SearchCategoryUseCase } from '@/core/category/aplication/use-case/search-category.use-case'
import { SearchLaboratoryUseCase } from '@/core/laboratory/aplication/use-case/search-laboratory.use-case'
import SectionCreate from '@/core/product/components/sections/section-create'
export const dynamic = 'force-dynamic'

export default async function ProductCreatePage() {
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

  return (
    <Flex className="w-full flex-1 items-stretch">
      <SectionCreate laboratories={laboratories} categories={categories} />
    </Flex>
  )
}
