import Container from '@/core/shared/components/container'
import Flex from '@/core/shared/components/layout/flex'
import ListCategory from '@/core/category/components/list/list-category'
import type { Product } from '@/core/product/domain/entities/product'
import ProductItem from '@/core/product/components/sections/product-item'
import { Separator } from '@/components/ui/separator'

export default function ListProduct({ products }: { products: Product[] }) {
  return (
    <Container className="space-y-4" id="list-category">
      <Flex initialValue="column" className="w-full items-center">
        <h2 className="text-center">Productos</h2>
        <Separator className="h-[.20rem] w-[10rem]" />
      </Flex>
      <ListCategory />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </Container>
  )
}
