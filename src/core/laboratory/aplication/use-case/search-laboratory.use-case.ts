import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import type { Pagination } from '@/core/shared/infrastructure/schema/shared.schema'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { searchAction } from '@/core/shared/infrastructure/action/action'

export class SearchLaboratoryUseCase {
  static async run(data: Pagination): Promise<ResponseSA<Laboratory[]>> {
    return await searchAction<Laboratory>('laboratories', data)
  }
}
