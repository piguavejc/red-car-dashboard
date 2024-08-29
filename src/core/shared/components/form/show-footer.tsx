'use client'

import ButtonDelete from '@/core/shared/components/buttons/button-delete'
import ButtonEdit from '@/core/shared/components/buttons/button-edit'
import { usePathname } from 'next/navigation'

export default function ShowFooter({ id }: { id: string }) {
  const pathName = usePathname()

  const generateUrlToEdit = (): string => {
    const route = pathName.split('/')[2]
    return `/dashboard/${route}/edit/${id}`
  }

  return (
    <div className="flex items-center justify-between space-x-2">
      <ButtonEdit id={id} text="Editar" />
      <ButtonDelete id={id} text="Eliminar" />
    </div>
  )
}
