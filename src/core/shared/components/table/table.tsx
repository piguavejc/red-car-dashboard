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
import { cn } from '@/lib/utils'

type RecordWithId = {
  id: string
  [key: string]: string
}

type RecordsArray = RecordWithId[]

interface TableProps extends React.ComponentProps<typeof Card> {
  header: Record<string, String>
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

  if (actions) headers.push('Actions')

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
                <TableHead className="text-center" key={i}>
                  {name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entity) => {
              return (
                <TableRow key={entity.id}>
                  {Headerkeys.map((key) => {
                    return (
                      <TableCell key={key} className="text-center">
                        {entity[key]}
                      </TableCell>
                    )
                  })}
                  {actions && (
                    <TableCell className="text-center">
                      {actions({ entity })}
                    </TableCell>
                  )}
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
