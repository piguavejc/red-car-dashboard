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
import { useResource } from '@/core/shared/hook/use-resource'

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
  const { resource } = useResource()

  const handleDelete = async () => {
    const result = await deleteAction(resource, id)

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
          <DialogTitle> ¿Estás seguro de eliminar? </DialogTitle>
          <DialogDescription>
            Una vez eliminado no se podra recuperar la informacion
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
