import type { Product } from '@/core/product/domain/entities/product'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { searchAction } from '@/core/shared/infrastructure/action/action'

export class SearchProductUseCase {
  static async run(): Promise<ResponseSA<Product[]>> {
    return await searchAction<Product>('products')
  }
}
