'use client'

import type { Category } from '@/core/category/domain/entities/category'
import type { Laboratory } from '@/core/laboratory/domain/entities/laboratory'
import { UpdateProductUseCase } from '@/core/product/aplication/use-case/update-product.use-case'
import {
  productUpdateDtoSchema,
  type ProductUpdateDto
} from '@/core/product/domain/dto/product-update.dto'
import type { Product } from '@/core/product/domain/entities/product'
import FormEdit from '@/core/shared/components/form/form-edit'
import { createFields } from '@/lib/utils'
import toast from 'react-hot-toast'

export default function SectionEdit({
  product,
  laboratories,
  categories
}: {
  product: Product
  laboratories: Laboratory[]
  categories: Category[]
}) {
  const handleSubmit = async (values: ProductUpdateDto) => {
    if (values.image?.base64 === '') {
      const { image, ...rest } = values

      const result = await UpdateProductUseCase.run(product.id, rest)

      if (result === undefined) {
        toast.success('producto actualizado')
        return
      }
      toast.error(result.error)
    }

    const result = await UpdateProductUseCase.run(product.id, values)

    if (result === undefined) {
      toast.success('producto actualizado')
      return
    }
    toast.error(result.error)

    return
  }

  const categoriesOpts = categories.map((category) => ({
    id: category.id,
    value: category.name
  }))

  const laboratoriesOpts = laboratories.map((laboratory) => ({
    id: laboratory.id,
    value: laboratory.name
  }))

  const { defaultValues, fields } = createFields<ProductUpdateDto>({
    defaultValues: {
      name: product.name,
      description: product.description,
      categoryId: product.categoryId,
      laboratoryId: product.laboratoryId,
      image: {
        type: '',
        name: '',
        lastModified: 0,
        size: 0,
        base64: '',
        imageUrl: product.cloudinary.secureUrl
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
    <FormEdit
      schema={productUpdateDtoSchema}
      defaultValues={defaultValues}
      fields={fields}
      handleSubmit={handleSubmit}
    />
  )
}
