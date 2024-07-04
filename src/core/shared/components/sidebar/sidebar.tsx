'use client'

import { Card } from '@/components/ui/card'
import Menu from '@/core/shared/components/sidebar/menu'
import type React from 'react'
import { cn } from '@/lib/utils'
import { useCollapsed } from '@/store'
import { useEffect } from 'react'

interface SidebarProps extends React.ComponentProps<'section'> {
  title: string
}
export default function Sidebar({ className, title }: SidebarProps) {
  const { setIsCollapsed, isCollapsed } = useCollapsed()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      } else {
        setIsCollapsed(false)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Card className={cn('space-y-5', className, isCollapsed && 'hidden')}>
      <SideBarTitle title={title} />
      <ul className="space-y-4">
        <Menu text={'Category'} href={'/'} />
        <Menu text={'Product'} href={'/'} />
      </ul>
    </Card>
  )
}

const SideBarTitle = ({ title }: { title: string }) => {
  const { isCollapsed } = useCollapsed()

  return isCollapsed ? (
    <div>
      <p className="text-center text-xl font-bold">{title.charAt(0)}</p>
    </div>
  ) : (
    <div>
      <p className="text-xl font-bold">{title}</p>
    </div>
  )
}
