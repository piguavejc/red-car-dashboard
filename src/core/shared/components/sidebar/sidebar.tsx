'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'next-view-transitions'
import { LogOut } from 'lucide-react'
import Menu from '@/core/shared/components/sidebar/menu'
import type React from 'react'
import { cn } from '@/lib/utils'
import { logout } from '@/core/auth/domain/action'
import toast from 'react-hot-toast'
import { usePathname } from 'next/navigation'

interface SidebarProps extends React.ComponentProps<'section'> {
  title: string
  routes: DashboardRoutes
}
export default function Sidebar({ className, title, routes }: SidebarProps) {
  const pathName = usePathname()
  const [page, setPage] = useState<string>('')

  const handleLogout = async () => {
    await logout()
    toast.success('Sesión cerrada')
  }

  useEffect(() => {
    const route = pathName.split('/')
    if (route.length >= 2) {
      const page = route.slice(0, 3).join('/')
      console.log(page)
      setPage(page)
      return
    }
  }, [pathName])

  return (
    <Card className={cn('relative space-y-5', className)}>
      <div className="my-[2rem] text-center">
        <SideBarTitle title={title} />
      </div>
      <ul className="space-y-4">
        {routes.map((route) => (
          <Menu
            key={route.name}
            text={route.name}
            href={route.list ?? ''}
            className={cn(
              page === route.list ? 'text-primary' : 'bg-transparent'
            )}
          />
        ))}
        <Button
          variant={'ghost'}
          className="absolute bottom-[1rem] left-0 flex w-full items-center space-x-2"
          onClick={handleLogout}
        >
          <LogOut size={15} />
          <p>Cerrar sesión</p>
        </Button>
      </ul>
    </Card>
  )
}

const SideBarTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <Link href={'/dashboard'}>
        <p className="text-xl font-bold">{title}</p>
      </Link>
    </div>
  )
}
