import type { Category } from '@/core/category/domain/entities/category'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { searchAction } from '@/core/shared/infrastructure/action/action'

export class SearchCategoryUseCase {
  static async run(): Promise<ResponseSA<Category[]>> {
    return await searchAction<Category>('categories')
  }
}
