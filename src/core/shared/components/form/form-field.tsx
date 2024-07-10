'use client'

import type { Control, FieldValues } from 'react-hook-form'

import { FieldNumber } from '@/core/shared/components/form/field-number'
import { FieldPassword } from '@/core/shared/components/form/field-password'
import { FieldText } from '@/core/shared/components/form/field-text'
import { FieldTextArea } from '@/core/shared/components/form/field-textarea'
import { FieldUpload } from '@/core/shared/components/form/field-upload'

interface FormFieldProps<T extends FieldValues>
  extends React.ComponentProps<'div'> {
  label: string
  control: Control<T>
  accessorKey: keyof T
  placeholder: string
  type?: FieldTypes
}

export default function FormField<T extends FieldValues>({
  type = 'text',
  ...props
}: FormFieldProps<T>) {
  if (type === 'text') {
    return <FieldText {...props} />
  }

  if (type === 'password') {
    return <FieldPassword {...props} />
  }

  if (type === 'number') {
    return <FieldNumber {...props} />
  }

  if (type === 'textarea') {
    return <FieldTextArea {...props} />
  }

  if (type === 'upload') {
    return <FieldUpload {...props} />
  }
}
