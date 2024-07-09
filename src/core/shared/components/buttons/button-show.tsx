'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonShowProps extends React.ComponentProps<typeof Button> {
  id: string
}
export default function ButtonShow({
  id,
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
    <Button
      className={cn('', className)}
      {...props}
      variant={'outline'}
      onClick={redirectToShow}
    >
      <Eye />
    </Button>
  )
}
