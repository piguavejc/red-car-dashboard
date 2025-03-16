import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import type { FieldValues, Path } from 'react-hook-form'

import { Input } from '@/components/ui/input'

export const FieldEmail = <T extends FieldValues>({
  control,
  accessorKey,
  label,
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
                field.onChange(e.target.value)
                if (onChange) onChange(e.target.value)
              }}
              type="email"
              id={name}
              placeholder={placeholder}
              autoComplete={name}
              onInput={(e) => {
                const input = e.currentTarget
                const trimmedValue = input.value.replace(/\s{2,}/g, ' ')
                if (input.value !== trimmedValue) {
                  input.value = trimmedValue
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
