'use client'

import Flex from '@/core/shared/components/layout/flex'
import FormCreate from '@/core/shared/components/form/form-create'
import { z } from 'zod'

export default function ProductCreatePage() {
  const schema = z.object({
    name: z.string(),
    price: z.number()
  })

  return (
    <Flex className="w-full flex-1 items-stretch">
      <FormCreate schema={schema} />
    </Flex>
  )
}
