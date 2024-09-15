import CategorySection from '@/core/category/components/list/category-section'
import Container from '@/core/shared/components/container'
import Flex from '@/core/shared/components/layout/flex'
import type { Product } from '@/core/product/domain/entities/product'
import ProductItem from '@/core/product/components/sections/product-item'
import Section from '@/core/shared/components/section/section'
import { Separator } from '@/components/ui/separator'

export default function ListProduct({ products }: { products: Product[] }) {
  return (
    <Container id="list-category" className="space-y-4">
      <Flex initialValue="column" className="w-full items-center">
        <h2 className="text-center">Productos</h2>
        <Separator className="h-[.20rem] w-[10rem]" />
      </Flex>
      <CategorySection />
      <Section isEmpty={products.length === 0}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div>
      </Section>
    </Container>
  )
}
