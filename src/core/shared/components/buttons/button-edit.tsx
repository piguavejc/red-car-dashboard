'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonEditProps extends React.ComponentProps<typeof Button> {
  id: string
}
export default function ButtonEdit({
  id,
  className,
  ...props
}: ButtonEditProps) {
  const pathName = usePathname()
  const router = useRouter()

  const redirectToEdit = () => {
    const route = pathName.split('/dashboard/')[1]
    router.push(`/dashboard/${route}/edit/${id}`)
  }
  return (
    <Button
      className={cn('', className)}
      variant={'outline'}
      {...props}
      onClick={redirectToEdit}
    >
      <Pencil size={15} />
    </Button>
  )
}
