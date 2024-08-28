import type { AccessToken } from '@/core/shared/infrastructure/schema/shared.schema'
import type { LoginInput } from '@/core/auth/domain/entities/login-entity'
import type { ResponseSA } from '@/core/shared/infrastructure/action'
import { login } from '@/core/auth/domain/action'

export class AuthLogin {
  static async run(data: LoginInput): Promise<ResponseSA<AccessToken>> {
    return await login(data)
  }
}
