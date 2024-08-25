'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import Flex from '@/core/shared/components/layout/flex'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathName = usePathname()
  const [routes, setRoutes] = useState<string[]>([])

  useEffect(() => {
    const routes = pathName.split('/').filter((route) => route !== '')
    setRoutes(routes)
  }, [pathName])

  const generateBreadcrumbUrl = ({ page }: { page: string }): string => {
    const indexTarget = routes.findIndex((r) => r === page)
    const newRoutes = routes.slice(0, indexTarget + 1)
    const route = newRoutes.join('/')
    return `/${route}`
  }

  return (
    <Flex className="w-auto justify-start">
      {routes.map((route) => {
        return (
          <Flex key={route}>
            <Link href={generateBreadcrumbUrl({ page: route })}>
              <Button variant={'ghost'}>{route}</Button>
            </Link>

            {routes[routes.length - 1] === route ? null : <p>/</p>}
          </Flex>
        )
      })}
    </Flex>
  )
}
