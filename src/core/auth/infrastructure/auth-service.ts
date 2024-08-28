import { AuthLogin } from '@/core/auth/aplication/auth-login'
import type { LoginDto } from '@/core/auth/domain/dto/login-dto'
import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'

export class AuthService {
  static async login(data: LoginEntity): Promise<LoginDto> {
    const { accessToken } = await AuthLogin.run(data)
    return { accessToken }
  }
}
