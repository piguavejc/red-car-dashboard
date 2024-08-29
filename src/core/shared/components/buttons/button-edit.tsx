'use client'

import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import { Pencil } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useResource } from '@/core/shared/hook/use-resource'

interface ButtonEditProps extends React.ComponentProps<typeof Button> {
  id: string
  text?: string
}
export default function ButtonEdit({
  id,
  className,
  text,
  ...props
}: ButtonEditProps) {
  const pathName = usePathname()
  const { resource } = useResource()

  const generateUrl = (): string => {
    return `/dashboard/${resource}/edit/${id}`
  }

  return (
    <Link href={generateUrl()}>
      <Button className={cn('', className)} variant={'outline'} {...props}>
        {text === undefined && <Pencil size={15} />}
        {text !== undefined && (
          <div className="flex items-center space-x-2">
            <span>{text}</span>
            <Pencil size={15} />
          </div>
        )}
      </Button>
    </Link>
  )
}
