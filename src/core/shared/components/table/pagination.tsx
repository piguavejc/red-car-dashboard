'use client'

import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { usePathname, useSearchParams } from 'next/navigation'

import { PaginationEnum } from '@/core/shared/enums/pagination.enum'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function Pagination({ total }: { total: number }) {
  const [range, setRange] = useState<number>(
    Math.ceil(total / PaginationEnum.LIMIT)
  )
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const limit: number = Number.parseInt(
    params.get('limit') ?? PaginationEnum.LIMIT.toString()
  )

  const offset: number = Number.parseInt(
    params.get('offset') ?? PaginationEnum.OFFSET.toString()
  )

  let page = offset / limit

  page = page === PaginationEnum.LIMIT ? 0 : page

  return (
    <BasePagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {Array.from({ length: range }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`${pathName}?offset=${index * limit}`}
              className={cn(page === index ? 'bg-green-500' : null)}
            >
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
