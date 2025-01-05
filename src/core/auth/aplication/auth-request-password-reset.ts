import type { Message } from '@/core/shared/infrastructure/schema/shared.schema'
import type { RequestPasswordResetInput } from '@/core/auth/domain/entities/request-password-reset.entity'
import type { ResponseSA } from '@/core/shared/infrastructure/action/shared'
import { requestPasswordReset } from '@/core/auth/domain/action'

export class AuthRequestPasswordReset {
  static async run(
    data: RequestPasswordResetInput
  ): Promise<ResponseSA<Message>> {
    return await requestPasswordReset(data)
  }
}
