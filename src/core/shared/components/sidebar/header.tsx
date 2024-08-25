import Avatar from '@/core/shared/components/avatar'
import ButtonAvatar from '@/core/shared/components/buttons/button-avatar'
import ButtonTheme from '@/core/shared/components/buttons/button-theme'
import { Card } from '@/components/ui/card'
import Flex from '@/core/shared/components/layout/flex'
import type React from 'react'
import { cn } from '@/lib/utils'

interface HeaderProps extends React.ComponentProps<'header'> {}
export default function Header({ className }: HeaderProps) {
  return (
    <Card className={cn('w-full', className)}>
      <Flex>
        <ButtonTheme />
        <Avatar className="hidden lg:flex" />
        <ButtonAvatar className="lg:hidden" />
      </Flex>
    </Card>
  )
}
