'use client'

import { cn, getDashboardRoutes } from '@/lib/utils'

import Flex from '@/core/shared/components/layout/flex'
import Header from '@/core/shared/components/sidebar/header'
import type React from 'react'
import Sidebar from '@/core/shared/components/sidebar/sidebar'
import { useCollapsed } from '@/store'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { isCollapsed } = useCollapsed()

  const routes = getDashboardRoutes()
  return (
    <Flex
      className={cn('h-screen items-stretch p-2', !isCollapsed && 'space-x-2')}
    >
      <Sidebar
        title={'Dashboard'}
        className="bg-background p-2 md:p-5"
        routes={routes}
      />
      <Flex className="w-full flex-col items-stretch">
        <Header className="bg-background p-2 md:p-5" />
        <Flex className="flex-1 items-stretch justify-stretch p-4">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
