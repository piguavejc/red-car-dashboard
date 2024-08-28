'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthRegister } from '@/core/auth/aplication/auth-register'

import {
  loginSchema,
  type LoginEntity
} from '@/core/auth/domain/entities/login-entity'
import FormAuth from '@/core/shared/components/form/form-auth'

export default function RegisterSection() {
  const handleRegister = async (values: LoginEntity) => {
    await AuthRegister.run(values)
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
            schema={loginSchema}
            typesInput={['email', 'password']}
            placeholders={['Correo', 'Contraseña']}
            labels={['Correo', 'Contraseña']}
            showFields={['email', 'password']}
            handleSubmit={handleRegister}
          />
        </CardContent>
      </Card>
    </div>
  )
}
