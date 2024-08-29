import Flex from '@/core/shared/components/layout/flex'
import { SearchByIdCategoryUseCase } from '@/core/category/aplication/use-case/searchByIdCategory.use-case'
import ShowSection from '@/core/shared/components/section/show-section'
import { redirect } from 'next/navigation'

export default async function ShowPage({ params }: { params: { id: string } }) {
  const categoryId = params.id

  const result = await SearchByIdCategoryUseCase.run(categoryId)
  if (result.error !== null) {
    return redirect('/dashboard/categories')
  }

  const category = result.data

  return (
    <Flex className="flex w-full items-center justify-center">
      <ShowSection data={category} />
    </Flex>
  )
}
