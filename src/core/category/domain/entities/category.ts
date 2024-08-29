import { sharedSchema } from '@/core/shared/infrastructure/schema/shared.schema'
import { z } from 'zod'

export const categorySchema = sharedSchema.extend({
  name: z.string(),
  description: z.string().optional().nullable()
})

export type Category = z.infer<typeof categorySchema>
