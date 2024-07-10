'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormEdit from '@/core/shared/components/form/form-edit'
import { laboratoryDtoSchema } from '@/core/laboratory/domain/dto/laboratory-dto'

export default function LaboratoryEditPage() {
  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormEdit
        schema={laboratoryDtoSchema}
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
