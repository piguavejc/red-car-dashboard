import type { Product } from '@/core/product/domain/entities/product'
import type { ProductInputDto } from '@/core/product/domain/dto/product-input.dto'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { createAction } from '@/core/shared/infrastructure/action/action'

export class CreateProductUseCase {
  static async run(
    data: ProductInputDto
  ): Promise<ResponseSA<Product | undefined>> {
    return await createAction<Product>('products', data)
  }
}
