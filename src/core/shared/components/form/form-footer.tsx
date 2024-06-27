import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type React from 'react'
import { Separator } from '@/components/ui/separator'

interface FormFooterProps extends React.ComponentProps<'div'> {
  type: 'login' | 'register'
  isSubmitting: boolean
  forgotPasswordRedirect?: string
  loginRedirect?: string
}

export default function FormFooter({
  isSubmitting = false,
  forgotPasswordRedirect = '/',
  loginRedirect = '/',
  type
}: FormFooterProps) {
  if (type === 'login') {
    return (
      <FooterForgotPassword
        isSubmitting={isSubmitting}
        url={forgotPasswordRedirect}
      />
    )
  }

  if (type === 'register') {
    return <FooterLogin isSubmitting={isSubmitting} url={loginRedirect} />
  }
}

const FooterForgotPassword = ({
  isSubmitting,
  url
}: {
  isSubmitting: boolean
  url: string
}) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4">
      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full"
        id="send-button"
      >
        Iniciar sesión
      </Button>
      <Link
        href={url}
        className="self-end text-sm underline hover:no-underline"
      >
        ¿Ha perdido la contraseña?
      </Link>
      <Separator />
      <div className="flex w-full items-center space-x-2">
        <Button
          disabled={isSubmitting}
          variant={'outline'}
          type="submit"
          className="w-full"
          id="send-button"
        >
          Registrate
        </Button>
        <Button
          disabled={isSubmitting}
          variant={'outline'}
          type="submit"
          className="w-full"
          id="send-button"
        >
          Activar Cuenta
        </Button>
      </div>
    </div>
  )
}

const FooterLogin = ({
  isSubmitting,
  url
}: {
  isSubmitting: boolean
  url: string
}) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4">
      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full"
        id="send-button"
      >
        Registrate
      </Button>
      <Separator />
      <Link
        href={url}
        className="self-end text-sm underline hover:no-underline"
      >
        ¿Ya tienes una cuenta?
      </Link>
    </div>
  )
}
