'use client'

import FormCreate from '@/core/shared/components/form/form-create'
import Flex from '@/core/shared/components/layout/flex'
import { z, type ZodTypeAny } from 'zod'

export default function ProductCreatePage() {
  interface Product {
    name: string
    price: number
  }

  type TypeSchema<T> = { [K in keyof T]: ZodTypeAny }

  const schema = z.object<TypeSchema<Product>>({
    name: z.string(),
    price: z.number()
  })

  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormCreate schema={schema} />
    </Flex>
  )
}
