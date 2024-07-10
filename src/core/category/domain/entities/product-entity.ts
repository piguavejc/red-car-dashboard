import { z } from 'zod'

export const categorySchema = z.object({
  name: z.string()
})

export type CategoryEntity = z.infer<typeof categorySchema>
