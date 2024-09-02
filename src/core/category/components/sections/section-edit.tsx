'use client'

import { UpdateCategoryUseCase } from '@/core/category/aplication/use-case/update-category.use-case'
import {
  categoryInputDtoSchema,
  type CategoryInputDto
} from '@/core/category/domain/dto/category-input.dto'
import type { Category } from '@/core/category/domain/entities/category'
import FormEdit from '@/core/shared/components/form/form-edit'
import { createFields } from '@/lib/utils'
import toast from 'react-hot-toast'

export default function SectionEdit({ category }: { category: Category }) {
  const handleSubmit = async (values: CategoryInputDto) => {
    const result = await UpdateCategoryUseCase.run(category.id, values)
    if (result === undefined) {
      toast.success('Categoría actualizada')
      return
    }
    toast.error(result.error)
    return
  }

  const { defaultValues, fields } = createFields<CategoryInputDto>({
    defaultValues: {
      name: category.name,
      description: category.description
    },
    fields: [
      {
        accessorKey: 'name',
        label: 'Nombre',
        type: 'text'
      },
      {
        accessorKey: 'description',
        label: 'Descripción',
        type: 'textarea'
      }
    ]
  })

  return (
    <FormEdit
      schema={categoryInputDtoSchema}
      defaultValues={defaultValues}
      fields={fields}
      handleSubmit={handleSubmit}
    />
  )
}
