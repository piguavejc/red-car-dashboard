import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TableBase,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import CellHeader from '@/core/shared/components/table/cell-header'
import Pagination from '@/core/shared/components/table/pagination'
import type React from 'react'
import TypeCell from '@/core/shared/components/table/type-cell'
import { cn } from '@/lib/utils'

type RecordsArray = RecordWithId[]

interface TableProps extends React.ComponentProps<typeof Card> {
  header: Record<string, unknown>
  data: RecordsArray
  actions?: ({ entity }: { entity: RecordWithId }) => React.ReactNode
}

export function Table({
  header,
  actions,
  data,
  className,
  ...props
}: TableProps) {
  const headers = Object.values(header)
  const Headerkeys = Object.keys(header)

  return (
    <Card className={cn('', className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center">Tabla</CardTitle>
      </CardHeader>
      <CardContent>
        <TableBase>
          <TableHeader>
            <TableRow>
              {headers.map((name, i) => (
                <CellHeader key={i} value={name} />
              ))}
              {actions && <TableHead className="text-end">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entity, index) => {
              return (
                <TableRow key={entity.id}>
                  {Headerkeys.map((key) => {
                    return <TypeCell key={key} value={entity[key]} />
                  })}
                  {actions && <TableCell>{actions({ entity })}</TableCell>}
                </TableRow>
              )
            })}
          </TableBody>
        </TableBase>
        <Pagination />
      </CardContent>
    </Card>
  )
}