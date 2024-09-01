import { productSchema } from '@/core/product/domain/entities/product'
import { z } from 'zod'

export const productUpdateDtoSchema = productSchema
  .pick({
    name: true,
    description: true,
    categoryId: true,
    laboratoryId: true
  })
  .extend({
    image: z
      .object({
        name: z.string(),
        type: z.string(),
        lastModified: z.number(),
        size: z.number(),
        base64: z.string(),
        imageUrl: z.string().url().optional()
      })
      .optional()
  })

export type ProductUpdateDto = z.infer<typeof productUpdateDtoSchema>
