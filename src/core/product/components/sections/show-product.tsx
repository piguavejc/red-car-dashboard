import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import Image from 'next/image'
import type { Product } from '@/core/product/domain/entities/product'
import WhatsappButton from '@/core/shared/components/buttons/whatsapp-button'

export default function ShowProduct({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="space-y-4">
        <Image
          src={product.cloudinary.secureUrl}
          width={0}
          height={0}
          sizes="100%"
          alt={product.name}
          className="w-full max-w-lg"
        />
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter>
        <WhatsappButton description={product.name} className="w-full" />
      </CardFooter>
    </Card>
  )
}
