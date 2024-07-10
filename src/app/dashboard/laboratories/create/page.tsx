'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormCreate from '@/core/shared/components/form/form-create'
import { laboratorySchema } from '@/core/laboratory/domain/entities/laboratory-entity'

export default function LaboratoryCreatePage() {
  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormCreate
        schema={laboratorySchema}
        typesInput={['text', 'textarea', 'upload']}
        placeholders={['Nombre']}
        labels={['Nombre']}
        showFields={['name']}
      />
    </Flex>
  )
}
