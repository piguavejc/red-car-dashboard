'use client'

import { useAuthStore } from '@/app/auth/store/auth/auth.store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthRegister } from '@/core/auth/aplication/auth-register'

import {
  loginInputSchema,
  type LoginInput
} from '@/core/auth/domain/entities/login-entity'
import FormAuth from '@/core/shared/components/form/form-auth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function RegisterSection() {
  const router = useRouter()
  const email = useAuthStore((state) => state.email)
  const setEmail = useAuthStore((state) => state.setEmail)

  const handleRegister = async (values: LoginInput) => {
    const result = await AuthRegister.run(values)
    if (result.error !== null) {
      toast.error(result.error)
      return
    }
    toast.success('Usuario registrado correctamente')
    router.push('/auth/login')
    router.refresh()
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center font-bold md:text-xl lg:text-2xl">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormAuth
            schema={loginInputSchema}
            typesInput={['email', 'password']}
            placeholders={['Correo', 'Contraseña']}
            labels={['Correo', 'Contraseña']}
            showFields={['email', 'password']}
            handleSubmit={handleRegister}
            formType="register"
            values={{ email, password: '' }}
            setValues={[
              (value: unknown) => {
                console.log('email', value)
                if (typeof value === 'string') {
                  setEmail(value)
                }
              }
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
