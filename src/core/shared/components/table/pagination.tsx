'use client'

import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Pagination() {
  const [range] = useState<number>(5)
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const page: number = Number.parseInt(params.get('page') ?? '1')

  useEffect(() => {}, [searchParams])

  return (
    <BasePagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {Array.from({ length: range }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink href={`${pathName}?page=${index + 1}`}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </BasePagination>
  )
}
