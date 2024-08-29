'use client'

import { UpdateCategoryUseCase } from '@/core/category/aplication/use-case/update-category.use-case'
import {
  categoryInputDtoSchema,
  type CategoryInputDto
} from '@/core/category/domain/dto/category-input.dto'
import type { Category } from '@/core/category/domain/entities/category'
import FormEdit from '@/core/shared/components/form/form-edit'
import toast from 'react-hot-toast'

export default function SectionEdit({ category }: { category: Category }) {
  const handleSubmit = async (values: CategoryInputDto) => {
    const result = await UpdateCategoryUseCase.run(category.id, values)
    if (result.error !== null) {
      toast.error(result.error)
      return
    }
    toast.success('Categoría actualizada')
  }

  return (
    <FormEdit
      schema={categoryInputDtoSchema}
      defaultValues={{
        name: category.name,
        description: category.description
      }}
      labels={['Nombre', 'Description']}
      showFields={['name', 'description']}
      placeholders={['name', 'description']}
      typesInput={['text', 'textarea']}
      handleSubmit={handleSubmit}
    />
  )
}
