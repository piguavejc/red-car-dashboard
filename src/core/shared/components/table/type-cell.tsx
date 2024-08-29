import React from 'react'
import { TableCell } from '@/components/ui/table'
import { formatDateToGuayaquilTime } from '@/lib/utils'

interface TypeCellProps extends React.ComponentProps<typeof TableCell> {
  value: unknown
}
export default function TypeCell({ value }: TypeCellProps) {
  function isValidDate(dateString: string): boolean {
    const date = new Date(dateString)
    return !isNaN(date.getTime())
  }

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
