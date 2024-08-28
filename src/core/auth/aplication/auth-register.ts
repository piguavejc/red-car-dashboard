import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'
import type { Message } from '@/core/shared/infrastructure/schema/shared.schema'
import { register } from '@/core/auth/domain/action'

export class AuthRegister {
  static async run(data: LoginEntity): Promise<Message> {
    return await register(data)
  }
}
