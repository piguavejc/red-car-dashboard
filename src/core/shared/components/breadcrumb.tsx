'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import Flex from '@/core/shared/components/layout/flex'

export default function Breadcrumb() {
  const pathName = usePathname()
  const [routes, setRoutes] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    const routes = pathName.split('/').filter((route) => route !== '')
    setRoutes(routes)
  }, [pathName])

  const handleRedirect = ({ route }: { route: string }) => {
    const indexTarget = routes.findIndex((r) => r === route)
    const newRoutes = routes.slice(0, indexTarget + 1)
    const newPath = newRoutes.join('/')
    router.push(`/${newPath}`)
  }

  return (
    <Flex>
      {routes.map((route) => {
        return (
          <Flex key={route}>
            <Button variant={'ghost'} onClick={() => handleRedirect({ route })}>
              {route}
            </Button>
            {routes[routes.length - 1] === route ? null : <p>/</p>}
          </Flex>
        )
      })}
    </Flex>
  )
}
