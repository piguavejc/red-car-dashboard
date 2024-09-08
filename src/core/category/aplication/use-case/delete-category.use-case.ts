import type { Category } from '@/core/category/domain/entities/category'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import deleteAction from '@/core/shared/infrastructure/action/action'

export class DeleteCategoryUseCase {
  static async run(id: string): Promise<ResponseSA<Category>> {
    return await deleteAction<Category>('categories', id)
  }
}
