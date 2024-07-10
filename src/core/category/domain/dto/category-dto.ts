import { z } from 'zod'

export const CategoryDtoSchema = z.object({
  id: z.string(),
  name: z.string()
})

export type CategoryDto = z.infer<typeof CategoryDtoSchema>
