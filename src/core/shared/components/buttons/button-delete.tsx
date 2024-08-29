'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { cn } from '@/lib/utils'
import deleteAction from '@/core/shared/infrastructure/action/action'
import toast from 'react-hot-toast'
import { usePathname } from 'next/navigation'

interface ButtonDeleteProps extends React.ComponentProps<typeof Button> {
  id: string
  text?: string
}
export default function ButtonDelete({
  id,
  text,
  className,
  ...props
}: ButtonDeleteProps) {
  const pathName = usePathname()

  const handleDelete = async () => {
    const resource = pathName.split('/')[2]
    const result = await deleteAction(resource, id)

    console.log(resource)

    if (result.error !== null) {
      toast.error(result.error)
      return
    }

    toast.success('Eliminado correctamente')
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'destructive'}
          className={cn('', className)}
          {...props}
        >
          {text && (
            <div className="flex items-center space-x-2">
              <span>{text}</span>
              <Trash size={15} />
            </div>
          )}
          {text === undefined && <Trash size={15} />}
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
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'secondary'}>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={'destructive'} onClick={handleDelete}>
              Eliminar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
