'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Avatar from '@/core/shared/components/avatar'
import { Link } from 'next-view-transitions'
import { cn } from '@/lib/utils'

export default function ButtonAvatar({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuTrigger>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('', className)} {...props}>
        <Avatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={'/profiles'}>
          <DropdownMenuItem className="cursor-pointer space-x-2 bg-transparent">
            <p>hola</p>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
