import type { Product } from '@/core/product/domain/entities/product'
import type { ProductUpdateDto } from '@/core/product/domain/dto/product-update.dto'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { updateAction } from '@/core/shared/infrastructure/action/action'

export class UpdateProductUseCase {
  static async run(
    id: string,
    data: ProductUpdateDto
  ): Promise<ResponseSA<Product | undefined>> {
    return await updateAction<Product>('products', id, data)
  }
}
