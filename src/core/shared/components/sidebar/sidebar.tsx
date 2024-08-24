'use client'

import { Card } from '@/components/ui/card'
import Menu from '@/core/shared/components/sidebar/menu'
import type React from 'react'
import { cn } from '@/lib/utils'

interface SidebarProps extends React.ComponentProps<'section'> {
  title: string
  routes: DashboardRoutes
}
export default function Sidebar({ className, title, routes }: SidebarProps) {
  return (
    <Card className={cn('space-y-5', className)}>
      <SideBarTitle title={title} />
      <ul className="space-y-4">
        {routes.map((route) => (
          <Menu key={route.name} text={route.name} href={route.list ?? ''} />
        ))}
      </ul>
    </Card>
  )
}

const SideBarTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="text-xl font-bold">{title}</p>
    </div>
  )
}
