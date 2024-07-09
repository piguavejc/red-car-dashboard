'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import Breadcrumb from '@/core/shared/components/breadcrumb'
import FormField from '@/core/shared/components/form/form-field'
import Flex from '@/core/shared/components/layout/flex'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'
import { ZodObject, type z, type ZodType } from 'zod'

interface FormEditProps<T extends Record<string, unknown>> {
  schema: ZodObject<{ [K in keyof T]: ZodType }>
  defaultValues: Record<keyof T, unknown>
}

export default function FormEdit<T extends Record<string, unknown>>({
  schema,
  defaultValues
}: FormEditProps<T>) {
  type TypeSchema = z.infer<typeof schema>
  const keysSchema = Object.keys(schema.shape)

  const pathName = usePathname()
  const [title, setTitle] = useState<string>('')

  const form = useForm<TypeSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...(defaultValues as DefaultValues<TypeSchema>)
    }
  })
  const { isSubmitting } = form.formState

  const onSubmit = async (values: TypeSchema) => {
    console.log(values)
  }

  useEffect(() => {
    if (pathName.includes('/edit')) {
      const routes = pathName.split('/')
      const title = routes[routes.length - 2]
      setTitle(title)
    }
  }, [pathName])

  return (
    <Flex className="w-full flex-1 flex-col items-start space-y-5">
      <Breadcrumb />
      <Flex className="w-full flex-1 flex-col items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-lg"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {keysSchema.map((key) => (
                  <FormField
                    key={key}
                    label={key}
                    placeholder={''}
                    control={form.control}
                    accessorKey={key}
                  />
                ))}
                <Flex>
                  <Button variant={'outline'}>Cancelar</Button>
                  <Button disabled={isSubmitting} type="submit">
                    Guardar
                  </Button>
                </Flex>
              </CardContent>
            </Card>
          </form>
        </Form>
      </Flex>
    </Flex>
  )
}
