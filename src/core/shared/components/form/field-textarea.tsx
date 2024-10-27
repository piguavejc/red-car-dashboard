import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import type { FieldValues, Path } from 'react-hook-form'

import { Textarea } from '@/components/ui/textarea'

export const FieldTextArea = <T extends FieldValues>({
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
            <Textarea
              {...field}
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
