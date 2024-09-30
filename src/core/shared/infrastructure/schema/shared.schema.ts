import { z } from 'zod'

export const sharedSchema = z.object({
  id: z.string(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const accessTokenSchema = z.object({
  accessToken: z.string()
})

export const idSchema = z.object({
  id: z.string().uuid()
})

export const messageSchema = z.object({
  message: z.string()
})

export const imageSchema = z.object({
  name: z.string().min(3),
  type: z.string().min(3),
  lastModified: z.number(),
  size: z.number(),
  base64: z.string().min(3),
  imageUrl: z.string().url().optional()
})

export const paginationSchema = z
  .object({
    limit: z.number(),
    offset: z.number()
  })
  .optional()

export type Pagination = z.infer<typeof paginationSchema>
export type AccessToken = z.infer<typeof accessTokenSchema>
export type Id = z.infer<typeof idSchema>
export type Message = z.infer<typeof messageSchema>
export type ImageBase64 = z.infer<typeof imageSchema>
