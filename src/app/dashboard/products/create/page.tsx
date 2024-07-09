'use client'

import FormCreate from '@/core/shared/components/form/form-create'
import Flex from '@/core/shared/components/layout/flex'
import { z, type ZodTypeAny } from 'zod'

export default function ProductCreatePage() {
  interface Product {
    name: string
    price: number
    image: File
  }

  type TypeSchema<T> = { [K in keyof T]: ZodTypeAny }

  const schema = z.object<TypeSchema<Product>>({
    name: z.string(),
    price: z.number(),
    image: z
      .instanceof(File)
      .refine(
        (file) => file.size < 2 * 1024 * 1024,
        'File size must be less than 2MB'
      )
      .refine(
        (file) => file.size < 2 * 1024 * 1024,
        'File size must be less than 2MB'
      )
  })

  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormCreate schema={schema} />
    </Flex>
  )
}
