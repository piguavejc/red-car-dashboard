import Banner from '@/core/shared/components/banner'
import Container from '@/core/shared/components/container'
import Footer from '@/core/shared/components/footer'
import Header from '@/core/shared/components/header'
import ListProduct from '@/core/product/components/sections/list-product'
import { SearchCategoryUseCase } from '@/core/category/aplication/use-case/search-category.use-case'
import { SearchProductByCategoryUseCase } from '@/core/product/aplication/use-case/search-product-by-category.use-case'
import SkeletonProduct from '@/core/product/components/skeleton/skeleton-product'
import { Suspense } from 'react'

export default async function Home({
  searchParams: { category }
}: {
  searchParams: {
    category: string | undefined
  }
}) {
  let name = category ?? ''

  if (category === undefined) {
    const resultCategory = await SearchCategoryUseCase.run()

    if (resultCategory.error) {
      return <div>Error</div>
    }

    const categories = resultCategory.data
    if (categories === null) {
      return <div>Loading...</div>
    }

    if (categories.length > 0) {
      name = categories[0].name
    }
  }

  const result = await SearchProductByCategoryUseCase.run(name)

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
      <Suspense fallback={<SkeletonProduct />}>
        <ListProduct products={products} />
      </Suspense>
      <Footer className="mt-40" />
    </div>
  )
}
