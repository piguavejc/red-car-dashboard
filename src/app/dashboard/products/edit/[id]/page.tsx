'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormEdit from '@/core/shared/components/form/form-edit'
import { z } from 'zod'

export default function ProductEditPage() {
  const schema = z.object({
    name: z.number(),
    price: z.number()
  })

  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormEdit
        schema={schema}
        defaultValues={{
          name: '',
          price: ''
        }}
      />
    </Flex>
  )
}
