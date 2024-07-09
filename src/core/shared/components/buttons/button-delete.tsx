'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonDeleteProps extends React.ComponentProps<typeof Button> {
  id: string
}
export default function ButtonDelete({
  id,
  className,
  ...props
}: ButtonDeleteProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={'outline'} className={cn('', className)} {...props}>
          <Trash size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
