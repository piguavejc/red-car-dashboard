import { z } from 'zod'

export const ProductDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string()
})

export type ProductDto = z.infer<typeof ProductDtoSchema>
