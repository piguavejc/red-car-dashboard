import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  children: React.ReactNode
  isEmpty?: boolean
}
export default function Section({
  className,
  children,
  isEmpty = false,
  ...props
}: SectionProps) {
  return (
    <section className={cn('', className)} {...props}>
      {isEmpty && (
        <div className="flex h-96 items-center justify-center">
          <p className="text-2xl text-gray-400">No hay datos</p>
        </div>
      )}
      {!isEmpty && children}
    </section>
  )
}
