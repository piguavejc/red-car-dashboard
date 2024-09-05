import { HeartHandshake } from 'lucide-react'
import { Link } from 'next-view-transitions'
import type React from 'react'
import { cn } from '@/lib/utils'

export default function Logo({
  className,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <Link
      href="#"
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      <HeartHandshake className="h-6 w-6" />
      <span className="text-lg font-semibold">Salud y Vida </span>
    </Link>
  )
}
