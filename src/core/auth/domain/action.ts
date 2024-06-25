'use server'

import { LoginDto } from '@/core/auth/domain/dto/login-dto'
import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'

export const login = (_data: LoginEntity): Promise<LoginDto> => {
  return Promise.resolve({
    accessToken: ''
  })
}
