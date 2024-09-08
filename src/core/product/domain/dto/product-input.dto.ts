import { imageSchema } from '@/core/shared/infrastructure/schema/shared.schema'
import { productSchema } from '@/core/product/domain/entities/product'
import { z } from 'zod'

export const productInputDtoSchema = productSchema
  .pick({
    name: true,
    categoryId: true,
    laboratoryId: true
  })
  .extend({
    image: imageSchema
  })

export type ProductInputDto = z.infer<typeof productInputDtoSchema>
