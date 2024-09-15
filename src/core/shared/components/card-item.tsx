import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'

import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface CardItemProps extends React.ComponentProps<'div'> {
  header: string
  text: string
}

export default function CardItem({
  header,
  text,
  className,
  ...props
}: CardItemProps) {
  return (
    <Card className={cn('w-full px-4 py-2', className)} {...props}>
      <CardContent className="space-y-3 p-0">
        <div className="w-full space-y-2">
          <CardTitle className="text-center">{header}</CardTitle>
          <Separator />
        </div>
        <CardDescription className="text-center">{text}</CardDescription>
      </CardContent>
    </Card>
  )
}
