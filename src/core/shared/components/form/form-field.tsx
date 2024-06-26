'use client'

import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import type { Control } from 'react-hook-form'
import { Input } from '@/components/ui/input'

interface FormFieldProps extends React.ComponentProps<'div'> {
  label: string
  control: Control<any>
  fieldKey: string
  placeholder: string
  type?: 'text' | 'password'
}

export default function FormField({ type = 'text', ...props }: FormFieldProps) {
  if (type === 'text') {
    return <FieldText {...props} type={type} />
  }
}

const FieldText = ({
  control,
  fieldKey,
  label,
  placeholder
}: FormFieldProps) => {
  return (
    <BaseFormField
      control={control}
      name={fieldKey}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={fieldKey}>{label}</FormLabel>

          <FormControl>
            <Input
              {...field}
              type="text"
              id={fieldKey}
              placeholder={placeholder}
              autoComplete={fieldKey}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
