'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormCreate from '@/core/shared/components/form/form-create'
import { categorySchema } from '@/core/category/domain/entities/product-entity'

export default function CategoryCreatePage() {
  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormCreate
        schema={categorySchema}
        typesInput={['text', 'textarea', 'upload']}
        placeholders={['Nombre']}
        labels={['Nombre']}
        showFields={['name']}
      />
    </Flex>
  )
}
