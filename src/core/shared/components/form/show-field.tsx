import { formatDateToGuayaquilTime, isValidDate } from '@/lib/utils'

export default function ShowField({ value }: { value: unknown }) {
  if (typeof value === 'string') {
    if (isValidDate(value)) {
      return (
        <p className="text-nowrap">
          {formatDateToGuayaquilTime({ date: new Date(value) })}
        </p>
      )
    }

    return <p className="text-nowrap">{value}</p>
  }
  return <div>no tiene tipo</div>
}
