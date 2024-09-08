import React from 'react'
import { TableHead } from '@/components/ui/table'

interface CellHeaderProps extends React.ComponentProps<typeof TableHead> {
  value: unknown
}

export default function CellHeader({ value }: CellHeaderProps) {
  if (typeof value === 'string') {
    return <TableHead className="text-nowrap text-center">{value}</TableHead>
  }
  if (typeof value === 'object') {
    if (value == null) return null

    const data = Object.values(value)[0]

    return <TableHead className="text-nowrap text-center">{data}</TableHead>
  }
  return (
    <TableHead className="text-nowrap text-center">{'no hay tipo'}</TableHead>
  )
}
