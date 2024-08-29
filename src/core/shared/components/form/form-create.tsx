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
  typesInput: FieldTypes[]
  placeholders: string[]
  labels: string[]
  showFields: (keyof T)[]
  handleSubmit: (data: T) => Promise<void>
}

export default function FormCreate<T extends Record<string, unknown>>({
  schema,
  labels,
  showFields,
  typesInput,
  placeholders,
  handleSubmit
}: FormCreateProps<T>) {
  const { resource } = useResource()
  type TypeSchema = z.infer<typeof schema>
  const keysSchema = Object.keys(schema.shape)
  const defaultValues: DefaultValues<TypeSchema> = keysSchema.reduce(
    (object, key) => {
      object[key as keyof TypeSchema] = '' as TypeSchema[keyof TypeSchema]
      return object
    },
    {} as DefaultValues<TypeSchema>
  )

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
                {keysSchema.map((accessorKey, index) => {
                  const type = typesInput[index]
                  const placeholder = placeholders[index]
                  const label = labels[index]
                  const isVisibled = showFields.includes(accessorKey as keyof T)

                  if (!isVisibled) return null

                  return (
                    <FormField
                      key={accessorKey}
                      label={label}
                      type={type}
                      placeholder={placeholder}
                      control={form.control}
                      accessorKey={accessorKey}
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
