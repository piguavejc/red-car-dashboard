import type { Product } from '@/core/product/domain/entities/product'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import deleteAction from '@/core/shared/infrastructure/action/action'

export class DeleteProductUseCase {
  static async run(id: string): Promise<ResponseSA<Product>> {
    return await deleteAction<Product>('products', id)
  }
}
