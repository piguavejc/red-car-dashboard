'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import type { Category } from '@/core/category/domain/entities/category'
import { Link } from 'next-view-transitions'
import { cn } from '@/lib/utils'

interface CategoryItemProps extends React.ComponentProps<'button'> {
  category: Category
}

export default function CategoryItem({
  category,
  className
}: CategoryItemProps) {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const [isFocus, setIsFocus] = useState(false)

  const generateCategoryUrl = (): string => {
    const params = new URLSearchParams(searchParams)
    params.set('category', category.name)
    return `${pathName}?${params.toString()}`
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    const query = params.get('category')

    if (query === null) return

    if (query === category.name) {
      setIsFocus(true)

      const element = document.getElementById('list-category')
      if (element !== null) {
        const yOffset = -2 * 16
        const y = element.getBoundingClientRect().top + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
      return
    }

    setIsFocus(false)
  }, [searchParams])

  return (
    <Link href={generateCategoryUrl()} className={cn('', className)}>
      <Button variant={isFocus ? 'default' : 'outline'}>{category.name}</Button>
    </Link>
  )
}
