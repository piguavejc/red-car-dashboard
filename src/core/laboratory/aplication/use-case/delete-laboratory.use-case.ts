import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import deleteAction from '@/core/shared/infrastructure/action/action'

export class DeleteLaboratoryUseCase {
  static async run(id: string): Promise<ResponseSA<Laboratory>> {
    return await deleteAction<Laboratory>('categories', id)
  }
}
