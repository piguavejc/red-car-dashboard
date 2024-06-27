import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import RegisterForm from '@/core/auth/components/forms/register-for'

export default function RegisterSection() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center font-bold md:text-xl lg:text-2xl">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  )
}
