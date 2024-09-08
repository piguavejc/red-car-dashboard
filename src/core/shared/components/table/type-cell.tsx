import { formatDateToGuayaquilTime, isValidDate } from '@/lib/utils'

import React from 'react'
import { TableCell } from '@/components/ui/table'

interface TypeCellProps extends React.ComponentProps<typeof TableCell> {
  value: unknown
}
export default function TypeCell({ value }: TypeCellProps) {
  if (typeof value === 'string') {
    if (isValidDate(value)) {
      return (
        <TableCell className="text-nowrap text-center">
          {formatDateToGuayaquilTime({ date: new Date(value) })}
        </TableCell>
      )
    }

    return <TableCell className="text-nowrap text-center">{value}</TableCell>
  }

  if (typeof value === 'object') {
    if (value === null) return null

    const data = (value as { name: string }).name

    return <TableCell className="text-nowrap text-center">{data}</TableCell>
  }

  return (
    <TableCell className="text-nowrap text-center">No existe el tipo</TableCell>
  )
}
