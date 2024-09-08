import type { Product } from '@/core/product/domain/entities/product'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { searchByIdAction } from '@/core/shared/infrastructure/action/action'

export class SearchByIdProductUseCase {
  static async run(id: string): Promise<ResponseSA<Product>> {
    return await searchByIdAction<Product>('products', id)
  }
}
