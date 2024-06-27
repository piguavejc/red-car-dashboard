'use cilent'

import { Button } from '@/components/ui/button'
import { Moon } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonThemeProps extends React.ComponentProps<typeof Button> {}

export default function ButtonTheme({ className, ...props }: ButtonThemeProps) {
  return (
    <Button variant={'outline'} className={cn('', className)} {...props}>
      <Moon size={15} strokeWidth={3} />
    </Button>
  )
}
