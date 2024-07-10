import { z } from 'zod'

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z
    .instanceof(File)
    .refine(
      (file) => file.size < 2 * 1024 * 1024,
      'File size must be less than 2MB'
    )
    .refine(
      (file) => file.size < 2 * 1024 * 1024,
      'File size must be less than 2MB'
    )
})

export type ProductEntity = z.infer<typeof productSchema>
