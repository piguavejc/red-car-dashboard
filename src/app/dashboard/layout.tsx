'use client'

import { cn, getDashboardRoutes } from '@/lib/utils'

import Flex from '@/core/shared/components/layout/flex'
import Header from '@/core/shared/components/sidebar/header'
import type React from 'react'
import Sidebar from '@/core/shared/components/sidebar/sidebar'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const routes = getDashboardRoutes()
  return (
    <Flex
      className={cn('h-screen items-stretch p-2 lg:flex-row lg:space-x-2')}
      initialValue={'column'}
    >
      <Sidebar
        title={'Dashboard'}
        className="hidden bg-background p-2 lg:block"
        routes={routes}
      />
      <Flex className="w-full items-stretch" initialValue={'column'}>
        <Header className="bg-background p-2 md:p-5" />
        <Flex className="flex-1 items-stretch justify-stretch">{children}</Flex>
      </Flex>
    </Flex>
  )
}
