import Banner from '@/core/shared/components/banner'
import Container from '@/core/shared/components/container'
import Footer from '@/core/shared/components/footer'
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
    <div className="space-y-4">
      <Header />
      <Container>
        <Banner />
      </Container>
      <ListProduct products={products} />
      <Footer className="mt-40" />
    </div>
  )
}
