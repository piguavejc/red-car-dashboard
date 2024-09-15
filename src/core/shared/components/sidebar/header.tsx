import Avatar from '@/core/shared/components/avatar'
import ButtonAvatar from '@/core/shared/components/buttons/button-avatar'
import ButtonTheme from '@/core/shared/components/buttons/button-theme'
import { Card } from '@/components/ui/card'
import Flex from '@/core/shared/components/layout/flex'
import type React from 'react'
import { cn } from '@/lib/utils'

interface HeaderProps extends React.ComponentProps<'div'> {
  routes: DashboardRoutes
}
export default function Header({ routes, className, ...props }: HeaderProps) {
  return (
    <Card className={cn('w-full', className)} {...props}>
      <Flex>
        <ButtonTheme />
        <Avatar className="hidden lg:flex" />
        <ButtonAvatar className="lg:hidden" routes={routes} />
      </Flex>
    </Card>
  )
}
