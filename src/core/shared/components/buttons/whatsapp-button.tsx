import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
interface WhatsappButtonProps extends React.ComponentProps<'a'> {
  description: string
}

export default function WhatsappButton({
  description,
  className,
  ...props
}: WhatsappButtonProps) {
  const whatsappUrl = `https://wa.me/?text=Estoy%20interesado%20en%20el%20producto%20${description}`

  return (
    // <Link className={cn('', className)} {...props} href={whatsappUrl}>
    <Button className="flex w-full items-center space-x-2 border border-slate-400">
      <Phone size={15} />
      <span>Whatsapp</span>
    </Button>
    // </Link>
  )
}
