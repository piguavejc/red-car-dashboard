import Flex from '@/core/shared/components/layout/flex'
import { SearchByIdCategoryUseCase } from '@/core/category/aplication/use-case/searchByIdCategory.use-case'
import SectionEdit from '@/core/category/components/sections/section-edit'

export default async function CategoryEditPage({
  params
}: {
  params: { id: string }
}) {
  const categoryId = params.id

  const result = await SearchByIdCategoryUseCase.run(categoryId)

  if (result.error !== null) {
    return <div>Error</div>
  }

  const category = result.data

  return (
    <Flex className="w-full flex-1 items-stretch">
      <SectionEdit category={category} />
    </Flex>
  )
}
