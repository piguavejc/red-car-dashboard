import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { searchByIdAction } from '@/core/shared/infrastructure/action/action'

export class SearchByIdLaboratoryUseCase {
  static async run(id: string): Promise<ResponseSA<Laboratory>> {
    return await searchByIdAction<Laboratory>('laboratories', id)
  }
}
