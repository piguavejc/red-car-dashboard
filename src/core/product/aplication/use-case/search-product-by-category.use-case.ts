import type { Product } from '@/core/product/domain/entities/product'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { searchByCategory } from '@/core/product/infrastructure/action'

export class SearchProductByCategoryUseCase {
  static async run(name: string): Promise<ResponseSA<Product[]>> {
    return await searchByCategory<Product>('products', name)
  }
}
