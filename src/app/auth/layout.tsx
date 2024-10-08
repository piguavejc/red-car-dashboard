export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen items-stretch justify-stretch">
      {children}
    </div>
  )
}
