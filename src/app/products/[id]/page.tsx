import Container from '@/core/shared/components/container'
import { SearchByIdProductUseCase } from '@/core/product/aplication/use-case/search-by-id-product.use-case'
import ShowProduct from '@/core/product/components/sections/show-product'
import { redirect } from 'next/navigation'

export default async function ProductPage({
  params: { id }
}: {
  params: { id: string | undefined }
}) {
  const productId = id
  if (productId === undefined) redirect('/404')

  const result = await SearchByIdProductUseCase.run(productId)

  if (result.error) {
    return <div>Error</div>
  }

  const product = result.data

  if (product === null) {
    return <div>Loading...</div>
  }

  return (
    <Container className="flex h-screen w-full items-center justify-center">
      <ShowProduct product={product} />
    </Container>
  )
}
