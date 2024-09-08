import Flex from '@/core/shared/components/layout/flex'
import { SearchByIdProductUseCase } from '@/core/product/aplication/use-case/search-by-id-product.use-case'
import ShowSection from '@/core/shared/components/section/show-section'
import { redirect } from 'next/navigation'

export default async function ShowPage({ params }: { params: { id: string } }) {
  const productId = params.id

  const result = await SearchByIdProductUseCase.run(productId)
  if (result.error !== null) {
    return redirect('/dashboard/categories')
  }

  const product = result.data

  return (
    <Flex className="flex w-full items-center justify-center">
      <ShowSection data={product} />
    </Flex>
  )
}
