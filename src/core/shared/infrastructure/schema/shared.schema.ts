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

export type AccessToken = z.infer<typeof accessTokenSchema>
export type Id = z.infer<typeof idSchema>
export type Message = z.infer<typeof messageSchema>
