'use client'

import Flex from '@/core/shared/components/layout/flex'
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
    <Flex
      className={cn('h-screen items-stretch p-2', !isCollapsed && 'space-x-2')}
    >
      <Sider title={'Dashboard'} className="bg-background p-2 md:p-5" />
      <Flex className="w-full flex-col items-stretch">
        <Header className="bg-background p-2 md:p-5" />
        <Flex className="flex-1 items-stretch justify-stretch p-4">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
