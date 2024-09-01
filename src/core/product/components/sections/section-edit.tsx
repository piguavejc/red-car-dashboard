'use client'

import { UpdateProductUseCase } from '@/core/product/aplication/use-case/update-product.use-case'
import {
  productUpdateDtoSchema,
  type ProductUpdateDto
} from '@/core/product/domain/dto/product-update.dto'
import type { Product } from '@/core/product/domain/entities/product'
import FormEdit from '@/core/shared/components/form/form-edit'
import toast from 'react-hot-toast'

export default function SectionEdit({ product }: { product: Product }) {
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

  return (
    <FormEdit
      schema={productUpdateDtoSchema}
      defaultValues={{
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
      }}
      typesInput={['text', 'textarea', 'text', 'text', 'upload']}
      placeholders={[
        'Nombre',
        'Descripcion',
        'Categoria',
        'Laboratorio',
        'Imagen'
      ]}
      labels={['Nombre', 'Descripcion', 'Categoria', 'Laboratorio', 'Imagen']}
      showFields={[
        'name',
        'description',
        'categoryId',
        'laboratoryId',
        'image'
      ]}
      handleSubmit={handleSubmit}
    />
  )
}
