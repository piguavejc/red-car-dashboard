import { clsx, type ClassValue } from 'clsx'
import { formatInTimeZone } from 'date-fns-tz'
import { es } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDashboardRoutes = (): DashboardRoutes => {
  return [
    {
      id: 'products',
      name: 'Products',
      list: '/dashboard/products',
      show: '/dashboard/products/:id',
      create: '/dashboard/products/create',
      edit: '/dashboard/products/edit/:id'
    },
    {
      id: 'categories',
      name: 'Categories',
      list: '/dashboard/categories',
      show: '/dashboard/categories/:id',
      create: '/dashboard/categories/create',
      edit: '/dashboard/categories/edit/:id'
    },
    {
      id: 'laboratories',
      name: 'Laboratories',
      list: '/dashboard/laboratories',
      show: '/dashboard/laboratories/:id',
      create: '/dashboard/laboratories/create',
      edit: '/dashboard/laboratories/edit/:id'
    }
  ]
}

export const formatDateToGuayaquilTime = ({ date }: { date: Date }): string => {
  const timeZone = 'America/Guayaquil'
  return formatInTimeZone(
    date,
    timeZone,
    "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
    {
      locale: es
    }
  )
}

export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

export const createFields = <T extends Record<string, unknown>>({
  defaultValues,
  fields
}: CreateFieldsProps<T>): CreateFieldsProps<T> => {
  return { defaultValues, fields }
}
