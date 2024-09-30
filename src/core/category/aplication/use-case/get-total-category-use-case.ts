import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { getTotalAction } from '@/core/shared/infrastructure/action/action'

export class GetCategoryTotalUseCase {
  static async run(): Promise<ResponseSA<RecordTotal>> {
    return await getTotalAction('categories')
  }
}
