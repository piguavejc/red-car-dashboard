'use client'

import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import type { Control } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

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

  if (type === 'password') {
    return <FieldPassword {...props} type={type} />
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
const FieldPassword = ({
  control,
  fieldKey,
  label,
  type,
  placeholder
}: FormFieldProps) => {
  const [buttonText, setButtonText] = useState<string>('Mostrar')
  const [inputType, setInputType] = useState<string>('password')
  const togglePasswordVisibility = () => {
    setButtonText(buttonText === 'Mostrar' ? 'Ocultar' : 'Mostrar')
    setInputType(inputType === 'text' ? 'password' : 'text')
  }

  return (
    <BaseFormField
      control={control}
      name={fieldKey}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={fieldKey}>{label}</FormLabel>

          <FormControl>
            <div className="flex justify-between space-x-2">
              <Input
                {...field}
                type={inputType}
                id={fieldKey}
                placeholder={placeholder}
                autoComplete={fieldKey}
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
