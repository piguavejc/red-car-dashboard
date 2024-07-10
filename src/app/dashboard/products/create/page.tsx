'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormCreate from '@/core/shared/components/form/form-create'
import { productSchema } from '@/core/product/domain/entities/product-entity'

export default function ProductCreatePage() {
  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormCreate
        schema={productSchema}
        typesInput={['text', 'textarea', 'upload']}
        placeholders={['Name', 'Description', 'Image']}
        labels={['Nombre', 'Descripción', 'Imagen']}
        showFields={['name', 'description', 'image']}
      />
    </Flex>
  )
}
