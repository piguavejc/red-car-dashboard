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
  return (
    <TableCell className="text-nowrap text-center">No existe el tipo</TableCell>
  )
}
