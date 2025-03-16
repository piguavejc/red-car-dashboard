'use client'

import { useAuthStore } from '@/app/auth/store/auth/auth.store'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { AuthLogin } from '@/core/auth/aplication/auth-login'

import {
  loginInputSchema,
  type LoginInput
} from '@/core/auth/domain/entities/login-entity'
import FormAuth from '@/core/shared/components/form/form-auth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function LoginSection() {
  const router = useRouter()
  const email = useAuthStore((state) => state.email)
  const setEmail = useAuthStore((state) => state.setEmail)

  const handleLogin = async (values: LoginInput) => {
    const result = await AuthLogin.run(values)
    if (result.error !== null) {
      toast.error(result.error)
      return
    }
    toast.success('Usuario logueado correctamente')
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center font-bold md:text-xl lg:text-2xl">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormAuth
            schema={loginInputSchema}
            typesInput={['email', 'password']}
            placeholders={['Correo', 'Contraseña']}
            labels={['Correo', 'Contraseña']}
            showFields={['email', 'password']}
            handleSubmit={handleLogin}
            values={{ email, password: '' }}
            setValues={[
              (value: unknown) => {
                if (typeof value === 'string') {
                  setEmail(value)
                }
              }
            ]}
          />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-center">
            ¿Olvidaste tu contraseña?{' '}
            <a
              href="/auth/request-password-reset"
              className="text-blue-500 hover:underline"
            >
              Recupérala aquí
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
