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

interface ButtonDeleteProps extends React.ComponentProps<typeof Button> {
  text?: string
  id: string
}
export default function ButtonDelete({
  id,
  text = 'Eliminar',
  className,
  ...props
}: ButtonDeleteProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>{text}</Button>
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
