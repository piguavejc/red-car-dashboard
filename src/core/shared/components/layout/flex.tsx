import React from 'react'
import { cn } from '@/lib/utils'

interface FlexProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
  initialValue?: 'row' | 'column'
}
export default function Flex({
  className,
  children,
  initialValue = 'row',
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between space-x-2',
        initialValue === 'column' &&
          'flex-col items-start justify-start space-x-0 space-y-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
