import Container from '@/core/shared/components/container'
import ListCategory from '@/core/category/components/list/list-category'
import type { Product } from '@/core/product/domain/entities/product'
import ProductItem from '@/core/product/components/sections/product-item'

export default function ListProduct({ products }: { products: Product[] }) {
  return (
    <Container className="space-y-4">
      <ListCategory />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </Container>
  )
}
