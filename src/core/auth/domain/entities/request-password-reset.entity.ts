import { z } from 'zod'

export const requestPasswordReset = z.object({
  email: z.string().email()
})

export type RequestPasswordResetInput = z.infer<typeof requestPasswordReset>
