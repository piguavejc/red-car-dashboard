'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormEdit from '@/core/shared/components/form/form-edit'
import { ProductDtoSchema } from '@/core/product/domain/dto/product-dto'

export default function ProductEditPage() {
  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormEdit
        schema={ProductDtoSchema}
        defaultValues={{
          id: '12345',
          name: 'hola',
          description: 'jaajskhs'
        }}
        labels={['Id', 'Nombre', 'Descripción']}
        showFields={['id', 'name', 'description']}
        placeholders={['id', 'name', 'description']}
        typesInput={['text', 'text', 'textarea']}
      />
    </Flex>
  )
}
