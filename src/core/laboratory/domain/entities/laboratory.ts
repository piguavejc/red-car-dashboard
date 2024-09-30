import { sharedSchema } from '@/core/shared/infrastructure/schema/shared.schema'
import { z } from 'zod'

export const laboratorySchema = sharedSchema.extend({
  name: z.string().trim(),
  description: z.string().optional().nullable()
})

export type Laboratory = z.infer<typeof laboratorySchema>
