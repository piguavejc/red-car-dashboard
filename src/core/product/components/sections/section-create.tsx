'use client'

import type { Category } from '@/core/category/domain/entities/category'
import { CreateProductUseCase } from '@/core/product/aplication/use-case/create-product.use-case'
import FormCreate from '@/core/shared/components/form/form-create'
import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import type { ProductInputDto } from '@/core/product/domain/dto/product-input.dto'
import { createFields } from '@/lib/utils'
import { productInputDtoSchema } from '@/core/product/domain/dto/product-input.dto'
import toast from 'react-hot-toast'

export default function SectionCreate({
  laboratories,
  categories
}: {
  laboratories: Laboratory[]
  categories: Category[]
}) {
  const handleCreate = async (data: ProductInputDto) => {
    const result = await CreateProductUseCase.run(data)

    if (result === undefined) {
      toast.success('Producto creado')
      return
    }

    toast.error(result.error)
  }

  const categoriesOpts = categories.map((category) => ({
    id: category.id,
    value: category.name
  }))

  const laboratoriesOpts = laboratories.map((laboratory) => ({
    id: laboratory.id,
    value: laboratory.name
  }))

  const { defaultValues, fields } = createFields<ProductInputDto>({
    defaultValues: {
      name: '',
      categoryId: '',
      laboratoryId: '',
      image: {
        name: '',
        type: '',
        size: 0,
        lastModified: 0,
        base64: ''
      }
    },
    fields: [
      {
        accessorKey: 'name',
        label: 'Nombre',
        type: 'text'
      },
      {
        accessorKey: 'categoryId',
        label: 'Categoría',
        type: 'select',
        options: categoriesOpts
      },
      {
        accessorKey: 'laboratoryId',
        label: 'Laboratorio',
        type: 'select',
        options: laboratoriesOpts
      },
      {
        accessorKey: 'image',
        label: 'Imagen',
        type: 'upload'
      }
    ]
  })

  return (
    <FormCreate
      schema={productInputDtoSchema}
      defaultValues={defaultValues}
      fields={fields}
      handleSubmit={handleCreate}
    />
  )
}
