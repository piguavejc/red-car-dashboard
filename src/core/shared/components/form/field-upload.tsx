'use client'

import {
  FormField as BaseFormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { useState } from 'react'

interface FormFieldProps<T extends FieldValues>
  extends React.ComponentProps<'div'> {
  label: string
  control: Control<T>
  accessorKey: keyof T
  placeholder: string
}

export const FieldUpload = <T extends FieldValues>({
  control,
  accessorKey,
  label,
  placeholder
}: FormFieldProps<T>) => {
  const [url, setUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const name = accessorKey as Path<T>

  if (isLoading) {
    console.log('loading')
    return <p>...loading</p>
  }

  return (
    <BaseFormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <FormControl>
              <>
                <Input
                  {...field}
                  value={undefined}
                  type={'file'}
                  id={name}
                  placeholder={placeholder}
                  autoComplete={name}
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files as FileList
                    const file = files[0]
                    const imageUrl = URL.createObjectURL(file)
                    setUrl(imageUrl)
                    field.onChange(file)
                  }}
                />
                <Card className="flex h-[10rem] w-full items-center justify-center p-2">
                  <label
                    htmlFor={name}
                    className="absolute z-10 cursor-pointer"
                  >
                    <Plus size={25} />
                  </label>
                  {url !== '' && (
                    <Image
                      src={url}
                      alt={name}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="h-full w-full max-w-lg object-contain"
                      onLoadStart={() => setIsLoading(true)}
                      onLoad={() => setIsLoading(false)}
                    />
                  )}
                </Card>
              </>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
