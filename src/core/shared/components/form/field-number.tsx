import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { Input } from '@/components/ui/input'

interface FormFieldProps<T extends FieldValues>
  extends React.ComponentProps<'div'> {
  label: string
  control: Control<T>
  accessorKey: keyof T
  placeholder: string
}

export const FieldNumber = <T extends FieldValues>({
  control,
  accessorKey,
  label,
  placeholder
}: FormFieldProps<T>) => {
  const name = accessorKey as Path<T>
  return (
    <BaseFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="number"
              id={name}
              placeholder={placeholder}
              autoComplete={name}
              onChange={(e) => {
                const valueAsNumber = e.target.valueAsNumber
                field.onChange(valueAsNumber)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
