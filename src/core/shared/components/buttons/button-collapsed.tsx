import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonCollapsedProps extends React.ComponentProps<typeof Button> {}

export default function ButtonCollapsed({
  className,
  ...props
}: ButtonCollapsedProps) {
  return (
    <Button variant={'outline'} className={cn('', className)} {...props}>
      <ChevronLeft size={15} strokeWidth={5} />
    </Button>
  )
}
