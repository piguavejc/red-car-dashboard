'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonCreateProps extends React.ComponentProps<typeof Button> {}
export default function ButtonCreate({
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
    <Button
      className={cn('space-x-2', className)}
      {...props}
      onClick={redirectToCreate}
    >
      <p>Crear</p>
      <CirclePlus size={15} />
    </Button>
  )
}
