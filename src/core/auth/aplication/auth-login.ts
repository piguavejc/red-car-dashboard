import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'
import type { LoginOutput } from '@/core/auth/infrastructure/dtos/output/login-output'
import { login } from '@/core/auth/domain/action'

export class AuthLogin {
  static async run(data: LoginEntity): Promise<LoginOutput> {
    const { accessToken } = await login(data)
    return {
      accessToken
    }
  }
}
