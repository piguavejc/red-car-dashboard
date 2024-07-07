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
  type?: 'text' | 'password'
}

export default function FormField<T extends FieldValues>({
  type = 'text',
  ...props
}: FormFieldProps<T>) {
  if (type === 'text') {
    return <FieldText {...props} type={type} />
  }

  if (type === 'password') {
    return <FieldPassword {...props} type={type} />
  }
}

const FieldText = <T extends FieldValues>({
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
              type="text"
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
const FieldPassword = <T extends FieldValues>({
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
              />
              <Button
                type="button"
                variant={'ghost'}
                onClick={togglePasswordVisibility} // Usando el nuevo nombre de función
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
