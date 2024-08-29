'use client'

import { Button } from '@/components/ui/button'
import { Clipboard } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ShowField from '@/core/shared/components/form/show-field'
import toast from 'react-hot-toast'
import { useCopyText } from '@/core/shared/hook/use-copy-text'

export default function ShowItem({
  name,
  value,
  isLast
}: {
  name: string
  value: unknown
  isLast: boolean
}) {
  const { handleCopyText } = useCopyText(value)

  const onCopyText = () => {
    handleCopyText()
    toast.success('Texto copiado')
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{name}</p>
          <ShowField value={value} />
        </div>
        <Button onClick={onCopyText} variant={'ghost'}>
          <Clipboard />
        </Button>
      </div>
      {isLast && <Separator />}
    </div>
  )
}
