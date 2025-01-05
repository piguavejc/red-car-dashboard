'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthRequestPasswordReset } from '@/core/auth/aplication/auth-request-password-reset'

import {
  requestPasswordReset,
  type RequestPasswordResetInput
} from '@/core/auth/domain/entities/request-password-reset.entity'
import FormAuth from '@/core/shared/components/form/form-auth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function RequestPasswordResetSection() {
  const router = useRouter()

  const handleLogin = async (values: RequestPasswordResetInput) => {
    const result = await AuthRequestPasswordReset.run(values)
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
            schema={requestPasswordReset}
            formType="request-password-reset"
            typesInput={['email']}
            placeholders={['Correo']}
            labels={['Correo']}
            showFields={['email']}
            handleSubmit={handleLogin}
            values={{ email: '' }}
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
