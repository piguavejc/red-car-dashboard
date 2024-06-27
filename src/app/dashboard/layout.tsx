'use client'

import Header from '@/core/shared/components/sidebar/header'
import type React from 'react'
import Sider from '@/core/shared/components/sidebar/sider'
import { cn } from '@/lib/utils'
import { useCollapsed } from '@/store'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { isCollapsed } = useCollapsed()
  return (
    <section
      className={cn(
        'flex h-screen p-4 md:space-x-4',
        !isCollapsed && 'space-x-2'
      )}
    >
      <Sider title={'Dashboard'} className="bg-background p-2 md:p-5" />
      <div className="w-full">
        <Header className="bg-background p-2 md:p-5" />
        <section className="p-4">{children}</section>
      </div>
    </section>
  )
}
