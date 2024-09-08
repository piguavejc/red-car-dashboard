'use client'

import { usePathname } from 'next/navigation'

export const useResource = () => {
  const pathName = usePathname()
  const resource = pathName.split('/')[2]
  return { resource }
}
