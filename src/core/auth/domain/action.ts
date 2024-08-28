'use server'

import type {
  AccessToken,
  Message
} from '@/core/shared/infrastructure/schema/shared.schema'

import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'
import { cookies } from 'next/headers'
import myAxios from '@/core/shared/infrastructure/my-axios'

export const login = async (data: LoginEntity): Promise<AccessToken> => {
  const result = await myAxios.post<AccessToken>('/auth/login', data)
  cookies().set('accessToken', result.data.accessToken)
  return result.data
}

export const register = async (data: LoginEntity): Promise<Message> => {
  const result = await myAxios.post<Message>('/auth/register', data)
  return result.data
}
