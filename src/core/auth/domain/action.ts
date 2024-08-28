'use server'

import type {
  AccessToken,
  Message
} from '@/core/shared/infrastructure/schema/shared.schema'

import type { LoginEntity } from '@/core/auth/domain/entities/login-entity'
import {
  handlingError,
  type ResponseSA
} from '@/core/shared/infrastructure/action'
import myAxios from '@/core/shared/infrastructure/my-axios'
import { cookies } from 'next/headers'

export const login = async (
  data: LoginEntity
): Promise<ResponseSA<AccessToken>> => {
  const result = await handlingError<AccessToken>(
    async (): Promise<AccessToken> => {
      const result = await myAxios.post<AccessToken>('/auth/login', data)
      cookies().set('accessToken', result.data.accessToken)
      return result.data
    }
  )
  return result
}

export const register = async (
  data: LoginEntity
): Promise<ResponseSA<Message>> => {
  const result = await handlingError<Message>(async () => {
    const result = await myAxios.post<Message>('/auth/register', data)
    return result.data
  })
  return result
}
