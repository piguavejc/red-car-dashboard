import { z } from 'zod'

export const laboratorySchema = z.object({
  name: z.string()
})

export type LaboratoryEntity = z.infer<typeof laboratorySchema>
