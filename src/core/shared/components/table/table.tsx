import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TableBase,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import type React from 'react'
import TypeCell from '@/core/shared/components/table/type-cell'
import { cn } from '@/lib/utils'

type RecordsArray = RecordWithId[]

interface TableProps extends React.ComponentProps<typeof Card> {
  header: Record<string, string>
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
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {headers.map((name, i) => (
                <TableHead className="text-nowrap text-center" key={i}>
                  {name}
                </TableHead>
              ))}
              {actions && <TableHead className="text-end">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entity) => {
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
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </TableBase>
      </CardContent>
    </Card>
  )
}
