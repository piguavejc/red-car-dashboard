import { CardTitle } from '@/components/ui/card'
import Flex from '@/core/shared/components/layout/flex'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Avatar({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <Flex className={cn('', className)} {...props}>
      <CardTitle>User</CardTitle>
      <Image
        src={'/user.svg'}
        width={0}
        height={0}
        sizes='"100%'
        alt={'user'}
        className="w-full max-w-[2.5rem]"
      />
    </Flex>
  )
}
