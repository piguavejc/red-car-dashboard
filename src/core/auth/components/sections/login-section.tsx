import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import LoginForm from '@/core/auth/components/forms/login-form'

export default function LoginSection() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center font-bold md:text-xl lg:text-2xl">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
