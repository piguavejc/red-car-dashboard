'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormEdit from '@/core/shared/components/form/form-edit'
import { z } from 'zod'

export default function ProductEditPage() {
  const schema = z.object({
    name: z.string(),
    price: z.number()
  })
  type TypeSchema = z.infer<typeof schema>
  const data: TypeSchema = {
    name: 'Product 1',
    price: 100
  }
  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormEdit schema={schema} data={data} />
    </Flex>
  )
}
