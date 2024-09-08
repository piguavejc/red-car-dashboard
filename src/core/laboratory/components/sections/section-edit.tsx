'use client'

import { UpdateLaboratoryUseCase } from '@/core/laboratory/aplication/use-case/update-laboratory.use-case'
import {
  laboratoryInputDtoSchema,
  type LaboratoryInputDto
} from '@/core/laboratory/domain/dto/laboratory-input.dto'
import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import FormEdit from '@/core/shared/components/form/form-edit'
import { createFields } from '@/lib/utils'
import toast from 'react-hot-toast'

export default function SectionEdit({
  laboratory
}: {
  laboratory: Laboratory
}) {
  const handleSubmit = async (values: LaboratoryInputDto) => {
    const result = await UpdateLaboratoryUseCase.run(laboratory.id, values)
    if (result === undefined) {
      toast.success('Categoría actualizada')
      return
    }
    toast.error(result.error)
    return
  }

  const { defaultValues, fields } = createFields<LaboratoryInputDto>({
    defaultValues: {
      name: laboratory.name,
      description: laboratory.description
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
      schema={laboratoryInputDtoSchema}
      defaultValues={defaultValues}
      fields={fields}
      handleSubmit={handleSubmit}
    />
  )
}
