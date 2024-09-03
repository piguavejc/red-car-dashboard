import Container from '@/core/shared/components/container'
import Flex from '@/core/shared/components/layout/flex'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Footer({
  className,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer className={cn('bg-gray-950', className)} {...props}>
      <Container className="space-y-8 rounded-md p-4">
        <Flex className="flex flex-col space-y-8 md:flex-row md:space-y-0">
          <Image
            src={'/user.svg'}
            width={0}
            height={0}
            sizes="100%"
            alt=""
            className="w-full max-w-[2rem]"
          />

          <ul className="flex items-center space-x-8">
            <li>Inicio</li>
            <li>Productos</li>
          </ul>
          <div className="space-y-4">
            <p className="text-center">Redes Sociales</p>
            <ul className="flex items-center space-x-8">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Tik Tok</li>
            </ul>
          </div>
        </Flex>
        <Flex>
          <p>Copyright © piguavejc</p>
          <p>Creado por jeandev</p>
        </Flex>
      </Container>
    </footer>
  )
}
