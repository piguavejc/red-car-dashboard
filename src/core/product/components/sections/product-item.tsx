'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import type { Product } from '@/core/product/domain/entities/product'
import WhatsappButton from '@/core/shared/components/buttons/whatsapp-button'
import { motion } from 'framer-motion'

export default function pProductItem({ product }: { product: Product }) {
  const whatsappUrl = `https://wa.me/?text=Estoy%20interesado%20en%20el%20producto%20${product.name}`
  const resource = 'products'

  const generateUrl = (): string => {
    return `/${resource}/${product.id}`
  }

  return (
    <Link href={generateUrl()}>
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
          <CardContent>
            <Image
              width={0}
              height={0}
              sizes="100%"
              className="w-full max-w-lg"
              alt={product.name}
              src={product.cloudinary.secureUrl}
            />
          </CardContent>
          <CardFooter>
            <WhatsappButton description={product.name} />
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  )
}
