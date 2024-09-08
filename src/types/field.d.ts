type FieldTypes =
  | 'text'
  | 'password'
  | 'upload'
  | 'number'
  | 'email'
  | 'select'
  | 'textarea'

interface CreateFieldsProps<T extends Record<string, unknown>> {
  defaultValues: {
    [K in keyof T]: T[K]
  }
  fields: Array<{
    accessorKey: keyof T
    label: string
    type?: FieldTypes
    options?: Array<{ id: string; value: string }>
  }>
}
