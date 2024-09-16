import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsappButtonProps extends React.ComponentProps<'a'> {
  description: string
}

export default function WhatsappButton({
  description,
  className,
  ...props
}: WhatsappButtonProps) {
  const text = `Hola, Estoy interesado en el producto ${description}`
  const whatsappUrl = `https://wa.me/593969851458?text=${text}`

  return (
    <Link
      className={cn('', className)}
      {...props}
      href={whatsappUrl}
      target="__blank"
    >
      <Button className="flex w-full items-center space-x-2 border border-slate-400">
        <Phone size={15} />
        <span>Whatsapp</span>
      </Button>
    </Link>
  )
}
