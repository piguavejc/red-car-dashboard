'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import Flex from '@/core/shared/components/layout/flex'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import type { Product } from '@/core/product/domain/entities/product'
import WhatsappButton from '@/core/shared/components/buttons/whatsapp-button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function pProductItem({ product }: { product: Product }) {
  const whatsappUrl = `https://wa.me/?text=Estoy%20interesado%20en%20el%20producto%20${product.name}`
  const resource = 'products'
  const [loading, setIsLoading] = useState<boolean>(false)

  const generateUrl = (): string => {
    return `/${resource}/${product.id}`
  }

  return (
    <motion.div
      className="cursor-pointer rounded-md"
      initial={{ backgroundColor: '#000' }}
      whileHover={{ backgroundColor: '#065D20' }}
      transition={{ duration: 0.3 }}
      title={product.name}
    >
      <Card className="bg-transparent">
        <CardHeader>
          <CardTitle className="text-center">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <Image
            width={0}
            height={0}
            sizes="100%"
            className={cn(
              'hidden h-full w-full max-w-[5rem] self-center object-cover md:max-w-[10rem]',
              loading ? 'max-w-[5rem] animate-pulse' : 'block'
            )}
            objectFit="cover"
            onLoadStart={() => {
              setIsLoading(true)
            }}
            onLoad={() => {
              setIsLoading(false)
            }}
            alt={product.name}
            src={product.cloudinary.secureUrl}
          />
        </CardContent>
        <CardFooter>
          <Flex className="w-full items-center space-y-4" initialValue="column">
            <WhatsappButton description={product.name} className="w-full" />
            <Link href={generateUrl()}>
              <p className="text-center underline">Ver mas detalle</p>
            </Link>
          </Flex>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
