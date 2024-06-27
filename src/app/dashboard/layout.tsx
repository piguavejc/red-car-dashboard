'use client'

import Header from '@/core/shared/components/sidebar/header'
import type React from 'react'
import Sider from '@/core/shared/components/sidebar/sider'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex h-screen space-x-4 p-4">
      <Sider title={'Dashboard'} className="bg-background" />
      <div className="w-full">
        <Header className="bg-background" />
        <section className="p-4">{children}</section>
      </div>
    </section>
  )
}
