import Container from '@/core/shared/components/container'
import { HeartHandshake } from 'lucide-react'
import { Link } from 'next-view-transitions'

export default function Header() {
  return (
    <Container>
      <header className="flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <HeartHandshake className="h-6 w-6" />
          <span className="text-lg font-semibold">Salud y Vida </span>
        </Link>
        <nav className="flex items-center gap-4"></nav>
      </header>
    </Container>
  )
}
