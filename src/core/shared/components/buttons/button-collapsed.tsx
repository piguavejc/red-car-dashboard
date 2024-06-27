import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { useCollapsed } from '@/store'

interface ButtonCollapsedProps extends React.ComponentProps<typeof Button> {}

export default function ButtonCollapsed({
  className,
  ...props
}: ButtonCollapsedProps) {
  const { isCollapsed, setIsCollapsed } = useCollapsed()

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <Button
      variant={'outline'}
      className={cn('', className)}
      {...props}
      onClick={handleCollapsed}
    >
      <IconCollapsed isCollapsed={isCollapsed} />
    </Button>
  )
}

const IconCollapsed = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return isCollapsed ? (
    <ChevronRight size={15} strokeWidth={5} />
  ) : (
    <ChevronLeft size={15} strokeWidth={5} />
  )
}
