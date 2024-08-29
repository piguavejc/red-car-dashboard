import type { Category } from '@/core/category/domain/entities/category'
import type { CategoryInputDto } from '@/core/category/domain/dto/category-input.dto'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { updateAction } from '@/core/shared/infrastructure/action/action'

export class UpdateCategoryUseCase {
  static async run(
    id: string,
    data: CategoryInputDto
  ): Promise<ResponseSA<Category>> {
    return await updateAction<Category>('categories', id, data)
  }
}
