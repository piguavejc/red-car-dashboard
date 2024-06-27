import { Card } from '@/components/ui/card'
import Menu from '@/core/shared/components/sidebar/menu'
import type React from 'react'
import { cn } from '@/lib/utils'
import { useCollapsed } from '@/store'

interface SiderProps extends React.ComponentProps<'section'> {
  title: string
}
export default function Sider({ className, title }: SiderProps) {
  return (
    <Card className={cn('', className)}>
      <div className="space-y-5 p-8">
        <SiderTitle title={title} />
        <ul className="space-y-4">
          <Menu text={'Category'} href={'/'} />
          <Menu text={'Product'} href={'/'} />
        </ul>
      </div>
    </Card>
  )
}

const SiderTitle = ({ title }: { title: string }) => {
  const { isCollapsed } = useCollapsed()

  return isCollapsed ? (
    <div>
      <p className="text-center text-xl font-bold">{title.charAt(0)}</p>
    </div>
  ) : (
    <div>
      <p className="text-xl font-bold">{title}</p>
    </div>
  )
}
