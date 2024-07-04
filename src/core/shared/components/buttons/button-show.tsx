'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ButtonShowProps extends React.ComponentProps<typeof Button> {
  text?: string
  id: string
}
export default function ButtonShow({
  id,
  text = 'Mostrar',
  className,
  ...props
}: ButtonShowProps) {
  const pathName = usePathname()
  const router = useRouter()

  const redirectToShow = () => {
    const route = pathName.split('/dashboard/')[1]
    router.push(`/dashboard/${route}/show/${id}`)
  }
  return (
    <Button className={cn('', className)} {...props} onClick={redirectToShow}>
      {text}
    </Button>
  )
}
