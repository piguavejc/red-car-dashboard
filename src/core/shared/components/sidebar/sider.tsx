import { Card } from '@/components/ui/card'
import type React from 'react'
import { cn } from '@/lib/utils'

interface SiderProps extends React.ComponentProps<'section'> {
  title: string
}
export default function Sider({ className, title }: SiderProps) {
  return (
    <Card className={cn('', className)}>
      <div className="space-y-5 p-8">
        <SiderTitle title={title} />
        <ul className="space-y-4">
          <li>Posts</li>
          <li>Users</li>
        </ul>
      </div>
    </Card>
  )
}

const SiderTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="text-xl font-bold">{title}</p>
    </div>
  )
}
