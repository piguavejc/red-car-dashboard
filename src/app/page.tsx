import Header from '@/core/shared/components/header'
import ListProduct from '@/core/product/components/sections/list-product'
import { SearchProductUseCase } from '@/core/product/aplication/use-case/search-product.use-case'

export default async function Home() {
  const result = await SearchProductUseCase.run()

  if (result.error) {
    return <div>Error</div>
  }

  const products = result.data

  if (products === null) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-10">
      <Header />
      <ListProduct products={products} />
    </div>
  )
}
