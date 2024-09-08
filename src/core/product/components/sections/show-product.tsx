import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Flex from '@/core/shared/components/layout/flex'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import type { Product } from '@/core/product/domain/entities/product'
import ShowItem from '@/core/shared/components/form/show-item'
import WhatsappButton from '@/core/shared/components/buttons/whatsapp-button'

export default function ShowProduct({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="space-y-4">
        <Flex className="relative p-4">
          <Link href={'/'} className="absolute left-0">
            <Button variant={'ghost'} className="p-0 hover:bg-transparent">
              <ArrowLeft size={25} />
            </Button>
          </Link>
          <CardTitle className="w-full text-center">{product.name}</CardTitle>
        </Flex>
        <Image
          src={product.cloudinary.secureUrl}
          width={0}
          height={0}
          sizes="100%"
          alt={product.name}
          className="w-full max-w-lg"
        />
      </CardHeader>
      <CardContent>
        <ShowItem
          name="Descricción"
          value={product.description ?? ''}
          isPublic
          isLast
        />
      </CardContent>
      <CardFooter>
        <WhatsappButton description={product.name} className="w-full" />
      </CardFooter>
    </Card>
  )
}
