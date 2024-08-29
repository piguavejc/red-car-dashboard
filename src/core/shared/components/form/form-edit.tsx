'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import Breadcrumb from '@/core/shared/components/breadcrumb'
import FormField from '@/core/shared/components/form/form-field'
import Flex from '@/core/shared/components/layout/flex'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'
import { ZodObject, type z, type ZodTypeAny } from 'zod'

interface FormEditProps<T extends Record<string, unknown>> {
  labels: string[]
  schema: ZodObject<{ [K in keyof T]: ZodTypeAny }>
  defaultValues: Record<keyof T, unknown>
  placeholders: string[]
  typesInput: FieldTypes[]
  showFields: (keyof T)[]
  handleSubmit: (values: T) => Promise<void>
}

export default function FormEdit<T extends Record<string, unknown>>({
  labels,
  schema,
  defaultValues,
  placeholders,
  typesInput,
  showFields,
  handleSubmit
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
    await handleSubmit(values as T)
  }

  useEffect(() => {
    if (pathName.includes('/edit')) {
      const routes = pathName.split('/')
      const title = routes[routes.length - 2]
      setTitle(title)
    }
  }, [pathName])

  return (
    <Flex
      className="w-full flex-1 items-start space-y-5"
      initialValue={'column'}
    >
      <Breadcrumb />
      <Flex
        className="w-full flex-1 items-center justify-center"
        initialValue={'column'}
      >
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
                {keysSchema.map((key, index) => {
                  const type = typesInput[index]
                  const placeholder = placeholders[index]
                  const isVisibled = showFields.includes(key as keyof T)
                  const label = labels[index]

                  if (!isVisibled) return null

                  return (
                    <FormField
                      key={key}
                      label={label}
                      placeholder={placeholder}
                      type={type}
                      control={form.control}
                      accessorKey={key}
                    />
                  )
                })}
                <Flex>
                  <Button variant={'outline'}>Cancelar</Button>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex items-center space-x-2"
                  >
                    Guardar
                    {isSubmitting && <Loader />}
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
