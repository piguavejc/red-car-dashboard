import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { Input } from '@/components/ui/input'

interface FormEmailProps<T extends FieldValues>
  extends React.ComponentProps<'div'> {
  label: string
  control: Control<T>
  accessorKey: keyof T
  placeholder: string
}

export const FieldEmail = <T extends FieldValues>({
  control,
  accessorKey,
  label,
  placeholder
}: FormEmailProps<T>) => {
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
