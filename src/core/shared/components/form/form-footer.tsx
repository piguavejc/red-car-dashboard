import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type React from 'react'

interface FormFooterProps extends React.ComponentProps<'div'> {
  type: 'login' | 'register'
  isSubmitting: boolean
  forgotPasswordRedirect?: string
}

export default function FormFooter({
  isSubmitting = false,
  forgotPasswordRedirect,
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
}

const FooterForgotPassword = ({
  isSubmitting
}: {
  isSubmitting: boolean
  url?: string
}) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <Link
        href="/user/auth?type=forgotPassword"
        className="text-sm underline hover:no-underline"
      >
        ¿Ha perdido la contraseña?
      </Link>
      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-auto"
        id="send-button"
      >
        Iniciar sesión
      </Button>
    </div>
  )
}
