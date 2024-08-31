import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import type { LaboratoryInputDto } from '@/core/laboratory/domain/dto/laboratory-input.dto'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { createAction } from '@/core/shared/infrastructure/action/action'

export class CreateLaboratoryUseCase {
  static async run(
    data: LaboratoryInputDto
  ): Promise<ResponseSA<Laboratory | undefined>> {
    return await createAction<Laboratory>('laboratories', data)
  }
}
