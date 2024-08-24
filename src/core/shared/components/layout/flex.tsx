import React from 'react'
import { cn } from '@/lib/utils'

interface FlexProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}
export default function Flex({ className, children, ...props }: FlexProps) {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  )
}
