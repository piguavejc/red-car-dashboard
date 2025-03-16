'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthResetPassword } from '@/core/auth/aplication/auth-reset-password'

import {
  resetPasswordSchema,
  type ResetPasswordInput
} from '@/core/auth/domain/entities/reset-password.entity'
import FormAuth from '@/core/shared/components/form/form-auth'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

export default function ResetPasswordSection({
  accessToken
}: {
  accessToken: string
}) {
  const router = useRouter()

  if (accessToken === '') {
    throw new Error('No se ha proporcionado un token de acceso')
  }

  const handleLogin = async (values: ResetPasswordInput) => {
    const result = await AuthResetPassword.run(values)
    if (result.error !== null) {
      toast.error(result.error)
      return
    }
    toast.success(
      'Se ha enviado un correo con las instrucciones para restablecer tu contraseña'
    )
    router.push('/auth/login')
    router.refresh()
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center font-bold md:text-xl lg:text-2xl">
            Restablecer contraseña
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormAuth
            schema={resetPasswordSchema}
            formType="request-password-reset"
            typesInput={['password']}
            placeholders={['Password']}
            labels={['Password']}
            showFields={['password']}
            handleSubmit={handleLogin}
            values={{ password: '', accessToken }}
            setValues={[
              (value: unknown) => {
                if (typeof value === 'string') {
                  console.log('value', value)
                }
              }
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
