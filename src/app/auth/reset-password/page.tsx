import ResetPasswordSection from '@/core/auth/components/sections/reset-password-section'

export default function ResetPasswordPage({
  searchParams: { accessToken }
}: {
  searchParams: {
    accessToken: string
  }
}) {
  return <ResetPasswordSection accessToken={accessToken} />
}
