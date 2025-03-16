'use client'

import type { Control, FieldValues } from 'react-hook-form'

import { FieldEmail } from '@/core/shared/components/form/field-email'
import { FieldNumber } from '@/core/shared/components/form/field-number'
import { FieldPassword } from '@/core/shared/components/form/field-password'
import { FieldSelect } from '@/core/shared/components/form/field-select'
import { FieldText } from '@/core/shared/components/form/field-text'
import { FieldTextArea } from '@/core/shared/components/form/field-textarea'
import { FieldUpload } from '@/core/shared/components/form/field-upload'
import type { z } from 'zod'

interface FormFieldProps<T extends FieldValues>
  extends React.ComponentProps<'div'> {
  label: string
  control: Control<{
    [k in keyof z.objectUtil.addQuestionMarks<
      z.baseObjectOutputType<{ [K in keyof T]: z.ZodTypeAny }>
    >]: any
  }>
  accessorKey: keyof T
  placeholder: string
  type?: FieldTypes
  options?: Array<{ id: string; value: string }>
  onChange?: (value: unknown) => void
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

  if (type === 'email') {
    return <FieldEmail {...props} />
  }

  if (type === 'select' && props.options !== undefined) {
    return <FieldSelect {...props} options={props.options} />
  }
}
