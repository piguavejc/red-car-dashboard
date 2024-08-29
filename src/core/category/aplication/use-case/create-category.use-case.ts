import type { Category } from '@/core/category/domain/entities/category'
import type { CategoryInputDto } from '@/core/category/domain/dto/category-input.dto'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { createAction } from '@/core/shared/infrastructure/action/action'

export class CreateCategoryUseCase {
  static async run(
    data: CategoryInputDto
  ): Promise<ResponseSA<Category | undefined>> {
    return await createAction<Category>('categories', data)
  }
}
