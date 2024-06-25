import type { LoginDto } from '@/core/auth/domain/dto/login-dto'
import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'
import { login } from '@/core/auth/domain/action'

export class AuthLogin {
  static async run(data: LoginEntity): Promise<LoginDto> {
    const { accessToken } = await login(data)
    return {
      accessToken
    }
  }
}
