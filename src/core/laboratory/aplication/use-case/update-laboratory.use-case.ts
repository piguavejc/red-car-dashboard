import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import type { LaboratoryInputDto } from '@/core/laboratory/domain/dto/laboratory-input.dto'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { updateAction } from '@/core/shared/infrastructure/action/action'

export class UpdateLaboratoryUseCase {
  static async run(
    id: string,
    data: LaboratoryInputDto
  ): Promise<ResponseSA<Laboratory | undefined>> {
    return await updateAction<Laboratory>('laboratories', id, data)
  }
}
