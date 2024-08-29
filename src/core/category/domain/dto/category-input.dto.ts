import { categorySchema } from '@/core/category/domain/entities/category'
import { z } from 'zod'

export const categoryInputDtoSchema = categorySchema.pick({
  name: true,
  description: true
})

export type CategoryInputDto = z.infer<typeof categoryInputDtoSchema>
