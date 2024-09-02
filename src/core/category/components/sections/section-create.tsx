'use client'

import { CreateCategoryUseCase } from '@/core/category/aplication/use-case/create-category.use-case'
import {
  categoryInputDtoSchema,
  type CategoryInputDto
} from '@/core/category/domain/dto/category-input.dto'
import FormCreate from '@/core/shared/components/form/form-create'
import { createFields } from '@/lib/utils'

import toast from 'react-hot-toast'

export default function SectionCreate() {
  const handleCreate = async (data: CategoryInputDto) => {
    const result = await CreateCategoryUseCase.run(data)

    if (result === undefined) {
      toast.success('Categoría creada')
      return
    }

    toast.error(result.error)
  }

  const { defaultValues, fields } = createFields<CategoryInputDto>({
    defaultValues: {
      name: ''
    },
    fields: [
      {
        accessorKey: 'name',
        label: 'Nombre',
        type: 'text'
      }
    ]
  })

  return (
    <FormCreate
      schema={categoryInputDtoSchema}
      fields={fields}
      defaultValues={defaultValues}
      handleSubmit={handleCreate}
    />
  )
}
