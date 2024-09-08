import { laboratorySchema } from '@/core/laboratory/domain/entities/laboratory'
import { z } from 'zod'

export const laboratoryInputDtoSchema = laboratorySchema.pick({
  name: true,
  description: true
})

export type LaboratoryInputDto = z.infer<typeof laboratoryInputDtoSchema>
