'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import Breadcrumb from '@/core/shared/components/breadcrumb'
import FormField from '@/core/shared/components/form/form-field'
import Flex from '@/core/shared/components/layout/flex'
import { useResource } from '@/core/shared/hook/use-resource'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'
import { ZodObject, type z, type ZodTypeAny } from 'zod'

interface FormCreateProps<T extends Record<string, unknown>> {
  schema: ZodObject<{ [K in keyof T]: ZodTypeAny }>
  defaultValues: DefaultValues<
    z.infer<ZodObject<{ [K in keyof T]: ZodTypeAny }>>
  >
  fields: Array<{
    accessorKey: keyof T
    label: string
    type?: FieldTypes
    options?: Array<{ id: string; value: string }>
  }>
  handleSubmit: (data: T) => Promise<void>
}

export default function FormCreate<T extends Record<string, unknown>>({
  schema,
  fields,
  defaultValues,
  handleSubmit
}: FormCreateProps<T>) {
  const { resource } = useResource()
  type TypeSchema = z.infer<typeof schema>

  const pathName = usePathname()
  const [title, setTitle] = useState<string>('')

  const form = useForm<TypeSchema>({
    resolver: zodResolver(schema),
    defaultValues
  })
  const { isSubmitting } = form.formState

  const onSubmit = async (values: TypeSchema) => {
    await handleSubmit(values as T)
  }

  useEffect(() => {
    if (pathName.endsWith('/create')) {
      const routes = pathName.split('/')
      const title = routes[routes.length - 2]
      setTitle(title)
    }
  }, [pathName])

  const { control } = form

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
                {fields.map((field, index) => {
                  return (
                    <FormField
                      key={index}
                      label={field.label}
                      type={field.type}
                      placeholder={'placeholder'}
                      control={form.control}
                      accessorKey={field.accessorKey}
                      options={field.options}
                    />
                  )
                })}
                <Flex>
                  <Link href={`/dashboard/${resource}`}>
                    <Button variant={'outline'} type="button">
                      Cancelar
                    </Button>
                  </Link>
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
