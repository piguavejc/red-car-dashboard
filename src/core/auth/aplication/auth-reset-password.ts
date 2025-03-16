import type { Message } from '@/core/shared/infrastructure/schema/shared.schema'
import type { ResetPasswordInput } from '@/core/auth/domain/entities/reset-password.entity'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { resetPassword } from '@/core/auth/domain/action'

export class AuthResetPassword {
  static async run(data: ResetPasswordInput): Promise<ResponseSA<Message>> {
    return await resetPassword(data)
  }
}
