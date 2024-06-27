import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import ButtonCollapsed from '@/core/shared/components/buttons/button-collapsed'
import ButtonTheme from '@/core/shared/components/buttons/button-theme'
import Flex from '@/core/shared/components/layout/flex'
import Image from 'next/image'
import type React from 'react'
import { cn } from '@/lib/utils'

interface HeaderProps extends React.ComponentProps<'header'> {}
export default function Header({ className }: HeaderProps) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <Flex>
          <Flex>
            <ButtonCollapsed />
            <ButtonTheme />
          </Flex>
          <Flex>
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
        </Flex>
      </CardHeader>
    </Card>
  )
}
