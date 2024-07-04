'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ButtonCreateProps extends React.ComponentProps<typeof Button> {
  text?: string
}
export default function ButtonCreate({
  text = 'Create',
  className,
  ...props
}: ButtonCreateProps) {
  const pathName = usePathname()
  const router = useRouter()

  const redirectToCreate = () => {
    const route = pathName.split('/dashboard/')[1]
    router.push(`/dashboard/${route}/create`)
  }
  return (
    <Button className={cn('', className)} {...props} onClick={redirectToCreate}>
      {text}
    </Button>
  )
}
