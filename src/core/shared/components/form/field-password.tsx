'use client'

import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

interface FormFieldProps<T extends FieldValues>
  extends React.ComponentProps<'div'> {
  label: string
  control: Control<T>
  accessorKey: keyof T
  placeholder: string
}

export const FieldPassword = <T extends FieldValues>({
  control,
  accessorKey,
  label,
  placeholder
}: FormFieldProps<T>) => {
  const [buttonText, setButtonText] = useState<string>('Mostrar')
  const [inputType, setInputType] = useState<string>('password')
  const togglePasswordVisibility = () => {
    setButtonText(buttonText === 'Mostrar' ? 'Ocultar' : 'Mostrar')
    setInputType(inputType === 'text' ? 'password' : 'text')
  }

  const name = accessorKey as Path<T>

  return (
    <BaseFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>

          <FormControl>
            <div className="flex justify-between space-x-2">
              <Input
                {...field}
                type={inputType}
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
              <Button
                type="button"
                variant={'ghost'}
                onClick={togglePasswordVisibility}
              >
                {buttonText}
              </Button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
