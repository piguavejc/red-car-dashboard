'use client'

import { CreateLaboratoryUseCase } from '@/core/laboratory/aplication/use-case/create-laboratory.use-case'
import FormCreate from '@/core/shared/components/form/form-create'
import type { LaboratoryInputDto } from '@/core/laboratory/domain/dto/laboratory-input.dto'
import { categoryInputDtoSchema } from '@/core/category/domain/dto/category-input.dto'
import toast from 'react-hot-toast'

export default function SectionCreate() {
  const handleCreate = async (data: LaboratoryInputDto) => {
    const result = await CreateLaboratoryUseCase.run(data)

    if (result === undefined) {
      toast.success('Categoría creada')
      return
    }

    toast.error(result.error)
  }
  return (
    <FormCreate
      schema={categoryInputDtoSchema}
      typesInput={['text']}
      placeholders={['Nombre']}
      labels={['Nombre']}
      showFields={['name']}
      handleSubmit={handleCreate}
    />
  )
}
