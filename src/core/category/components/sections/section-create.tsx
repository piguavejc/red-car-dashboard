'use client'

import { CreateCategoryUseCase } from '@/core/category/aplication/use-case/create-category.use-case'
import {
  categoryInputDtoSchema,
  type CategoryInputDto
} from '@/core/category/domain/dto/category-input.dto'
import FormCreate from '@/core/shared/components/form/form-create'
import { useRouter } from 'next/navigation'

import toast from 'react-hot-toast'

export default function SectionCreate() {
  const router = useRouter()
  const handleCreate = async (data: CategoryInputDto) => {
    const result = await CreateCategoryUseCase.run(data)

    if (result.error !== null) {
      toast.error(result.error)
      return
    }

    toast.success('Categoría creada')
    router.push('/dashboard/categories')
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
