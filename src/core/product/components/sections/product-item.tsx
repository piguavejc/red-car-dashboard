'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { Phone } from 'lucide-react'
import type { Product } from '@/core/product/domain/entities/product'
import { motion } from 'framer-motion'

export default function pProductItem({ product }: { product: Product }) {
  const whatsappUrl = `https://wa.me/?text=Estoy%20interesado%20en%20el%20producto%20${product.name}`

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
          <Link href={whatsappUrl} target="__blank" className="w-full">
            <Button className="flex w-full items-center space-x-2 border border-slate-400">
              <Phone size={15} />
              <span>Whatsapp</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
