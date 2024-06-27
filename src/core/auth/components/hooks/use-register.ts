'use client'

import {
  loginSchema,
  type LoginEntity
} from '@/core/auth/domain/entities/login-entity'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useRegister = () => {
  const form = useForm<LoginEntity>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const { isSubmitting } = form.formState

  const onSubmit = async (values: LoginEntity) => {}
  return { form, isSubmitting, onSubmit }
}
