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
import type { ImageBase64 } from '@/core/shared/infrastructure/schema/shared.schema'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import base64 from 'base64-encode-file'
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
  const [imageBase64, setImageBase64] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<ImageBase64>()

  const name = accessorKey as Path<T>

  if (isLoading) {
    return <p>...loading</p>
  }

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<ImageBase64> => {
    const files = e.target.files as FileList
    const file = files[0]
    const base64String = (await base64(file)) as string
    setImageBase64(base64String)

    const data = {
      name: file.name,
      type: file.type,
      lastModified: file.lastModified,
      size: file.size,
      base64: base64String
    }

    return data
  }

  return (
    <BaseFormField
      control={control}
      name={name}
      render={({ field }) => {
        if (field.value.imageUrl !== undefined) {
          setImageBase64(field.value.imageUrl)
        }
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
                  onChange={async (e) => {
                    const data = await handleFileChange(e)
                    field.onChange(data)
                  }}
                />
                <Card className="flex h-[10rem] w-full items-center justify-center p-2">
                  <label
                    htmlFor={name}
                    className="absolute z-10 cursor-pointer"
                  >
                    <Plus size={25} />
                  </label>
                  {imageBase64 !== '' && (
                    <Image
                      src={imageBase64}
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
