'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import FormField from '@/core/shared/components/form/form-field'
import Flex from '@/core/shared/components/layout/flex'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, type DefaultValues } from 'react-hook-form'
import { ZodObject, type z, type ZodTypeAny } from 'zod'

interface FormAuthProps<T extends Record<string, unknown>> {
  schema: ZodObject<{ [K in keyof T]: ZodTypeAny }>
  typesInput: FieldTypes[]
  placeholders: string[]
  labels: string[]
  showFields: (keyof T)[]
  handleSubmit: (values: T) => void
  formType?: 'login' | 'register'
}

export default function FormAuth<T extends Record<string, unknown>>({
  schema,
  labels,
  showFields,
  typesInput,
  placeholders,
  handleSubmit,
  formType = 'login'
}: FormAuthProps<T>) {
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

  const { isSubmitting } = form.formState

  return (
    <Flex
      className="w-full flex-1 items-start space-y-5"
      initialValue={'column'}
    >
      <Flex
        className="w-full flex-1 items-center justify-center"
        initialValue={'column'}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-lg"
          >
            <Card className="border-none">
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
                <Flex className="items-end" initialValue="column">
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex items-center space-x-2"
                  >
                    {formType === 'login' ? 'Iniciar Sesion' : 'Registrarse'}
                    {isSubmitting && <Loader />}
                  </Button>
                  {formType === 'login' && (
                    <p className="space-x-2">
                      <span>Aun no tienes una cuenta, registrate</span>
                      <Link
                        href={'/auth/register'}
                        className="text-blue-500 underline"
                      >
                        aqui
                      </Link>
                    </p>
                  )}
                  {formType === 'register' && (
                    <p className="space-x-2">
                      <span>Ya tienes una cuenta, inicia sesion</span>
                      <Link
                        href={'/auth/login'}
                        className="text-blue-500 underline"
                      >
                        aqui
                      </Link>
                    </p>
                  )}
                </Flex>
              </CardContent>
            </Card>
          </form>
        </Form>
      </Flex>
    </Flex>
  )
}
