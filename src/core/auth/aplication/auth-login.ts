import type { AccessToken } from '@/core/shared/infrastructure/schema/shared.schema'
import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'
import type { ResponseSA } from '@/core/shared/infrastructure/action'
import { login } from '@/core/auth/domain/action'

export class AuthLogin {
  static async run(data: LoginEntity): Promise<ResponseSA<AccessToken>> {
    return await login(data)
  }
}
