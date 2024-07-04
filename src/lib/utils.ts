import { clsx, type ClassValue } from 'clsx'
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
