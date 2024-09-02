import type React from 'react'
import { cn } from '@/lib/utils'

export default function Container({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex w-full items-center justify-center')} {...props}>
      <div className={cn('w-full max-w-[80rem]', className)}>{children}</div>
    </div>
  )
}
