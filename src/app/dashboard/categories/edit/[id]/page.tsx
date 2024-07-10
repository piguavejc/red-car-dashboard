'use client'

import { CategoryDtoSchema } from '@/core/category/domain/dto/category-dto'
import Flex from '@/core/shared/components/layout/flex'
import FormEdit from '@/core/shared/components/form/form-edit'

export default function CategoryEditPage() {
  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormEdit
        schema={CategoryDtoSchema}
        defaultValues={{
          id: '12345',
          name: 'hola'
        }}
        labels={['Nombre']}
        showFields={['name']}
        placeholders={['name']}
        typesInput={['text']}
      />
    </Flex>
  )
}
