'use server'

import type {
  AccessToken,
  Message
} from '@/core/shared/infrastructure/schema/shared.schema'

import type { LoginInput } from '@/core/auth/domain/entities/login-entity'
import type { RequestPasswordResetInput } from '@/core/auth/domain/entities/request-password-reset.entity'
import {
  handlingError,
  type ResponseSA
} from '@/core/shared/infrastructure/action/shared'
import myAxios from '@/core/shared/infrastructure/my-axios'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const login = async (
  data: LoginInput
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
  data: LoginInput
): Promise<ResponseSA<Message>> => {
  const result = await handlingError<Message>(async () => {
    const result = await myAxios.post<Message>('/auth/register', data)
    return result.data
  })
  return result
}

export const requestPasswordReset = async (
  data: RequestPasswordResetInput
): Promise<ResponseSA<Message>> => {
  console.log('data', data)
  const result = await handlingError<Message>(async () => {
    const result = await myAxios.post<Message>(
      '/auth/request-password-reset',
      data
    )
    return result.data
  })
  return result
}

export const logout = async (): Promise<void> => {
  cookies().delete('accessToken')
  revalidatePath('/')
  redirect('/')
}
