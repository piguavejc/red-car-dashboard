'use client'

import { CreateProductUseCase } from '@/core/product/aplication/use-case/create-product.use-case'
import FormCreate from '@/core/shared/components/form/form-create'
import type { ProductInputDto } from '@/core/product/domain/dto/product-input.dto'
import { productInputDtoSchema } from '@/core/product/domain/dto/product-input.dto'
import toast from 'react-hot-toast'

export default function SectionCreate() {
  const handleCreate = async (data: ProductInputDto) => {
    const result = await CreateProductUseCase.run(data)

    if (result === undefined) {
      toast.success('Producto creado')
      return
    }

    toast.error(result.error)
  }
  return (
    <FormCreate
      schema={productInputDtoSchema}
      typesInput={['text', 'text', 'text', 'upload']}
      placeholders={['Nombre', 'Categoria', 'Laboratorio', 'Imagen']}
      labels={['Nombre', 'Categoria', 'Laboratorio', 'Imagen']}
      showFields={['name', 'categoryId', 'laboratoryId', 'image']}
      handleSubmit={handleCreate}
    />
  )
}
