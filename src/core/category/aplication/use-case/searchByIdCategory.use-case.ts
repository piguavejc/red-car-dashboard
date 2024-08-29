import type { Category } from '@/core/category/domain/entities/category'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { searchByIdAction } from '@/core/shared/infrastructure/action/action'

export class SearchByIdCategoryUseCase {
  static async run(id: string): Promise<ResponseSA<Category>> {
    return await searchByIdAction<Category>('categories', id)
  }
}
