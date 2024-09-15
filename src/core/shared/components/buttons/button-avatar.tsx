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

interface ButtonAvatarProps
  extends React.ComponentProps<typeof DropdownMenuTrigger> {
  routes: DashboardRoutes
}

export default function ButtonAvatar({
  routes,
  className,
  ...props
}: ButtonAvatarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('', className)} {...props}>
        <Avatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none">
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {routes.map((route) => (
          <Link key={route.name} href={`/dashboard/${route.id}`}>
            <DropdownMenuItem className="cursor-pointer space-x-2 bg-transparent">
              <p>{route.name}</p>
            </DropdownMenuItem>
          </Link>
        ))}
        <Link href={'/categories'}>
          <DropdownMenuItem className="cursor-pointer space-x-2 bg-transparent">
            <p>hola</p>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
