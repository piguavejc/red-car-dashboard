import { z } from 'zod'

export const laboratoryDtoSchema = z.object({
  id: z.string(),
  name: z.string()
})

export type LaboratoryDto = z.infer<typeof laboratoryDtoSchema>
