import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import type { FieldValues, Path } from 'react-hook-form'

import { Input } from '@/components/ui/input'

export const FieldNumber = <T extends FieldValues>({
  label,
  control,
  accessorKey,
  placeholder,
  onChange
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
              onChange={(e) => {
                const valueAsNumber = e.target.valueAsNumber
                field.onChange(valueAsNumber)
                if (onChange) onChange(valueAsNumber)
              }}
              type="number"
              id={name}
              placeholder={placeholder}
              autoComplete={name}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
