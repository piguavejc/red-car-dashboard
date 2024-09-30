import { categorySchema } from '@/core/category/domain/entities/category'
import { laboratorySchema } from '@/core/laboratory/domain/entities/laboratory'
import { sharedSchema } from '@/core/shared/infrastructure/schema/shared.schema'
import { z } from 'zod'

const cloudinarySchema = sharedSchema.extend({
  name: z.string().min(3),
  assetId: z.string(),
  publicId: z.string(),
  version: z.number(),
  versionId: z.string(),
  signature: z.string(),
  width: z.number(),
  height: z.number(),
  format: z.string(),
  resourceType: z.string(),
  tags: z.array(z.string()),
  bytes: z.number(),
  type: z.string(),
  etag: z.string(),
  placeholder: z.boolean(),
  url: z.string().url(),
  secureUrl: z.string().url(),
  folder: z.string().nullable()
})

export const productSchema = sharedSchema.extend({
  name: z.string().min(3).trim(),
  description: z.string().min(3).max(255).optional().nullable(),
  laboratoryId: z.string().uuid().trim(),
  categoryId: z.string().uuid().trim(),
  cloudinaryId: z.string().uuid().trim(),
  category: categorySchema,
  laboratory: laboratorySchema,
  cloudinary: cloudinarySchema
})

export type Product = z.infer<typeof productSchema>
