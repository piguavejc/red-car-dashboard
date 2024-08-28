import type { AccessToken } from '@/core/shared/infrastructure/schema/shared.schema'
import { AuthLogin } from '@/core/auth/aplication/auth-login'
import type { LoginInput } from '@/core/auth/domain/entities/login-entity'
import type { ResponseSA } from '@/core/shared/infrastructure/action'

export class AuthService {
  static async login(data: LoginInput): Promise<ResponseSA<AccessToken>> {
    return await AuthLogin.run(data)
  }
}
