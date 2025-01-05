import { z } from 'zod'

export const resetPasswordSchema = z.object({
  password: z.string(),
  accessToken: z.string()
})

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
