import Container from '@/core/shared/components/container'
import { Link } from 'next-view-transitions'
import { MountainIcon } from 'lucide-react'

export default function Header() {
  return (
    <Container>
      <header className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="flex items-center gap-4"></nav>
      </header>
    </Container>
  )
}
