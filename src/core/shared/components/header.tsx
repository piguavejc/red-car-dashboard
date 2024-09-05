import { Button } from '@/components/ui/button'
import Container from '@/core/shared/components/container'
import { Link } from 'next-view-transitions'
import Logo from '@/core/shared/components/header/logo'

export default function Header() {
  return (
    <Container>
      <header className="flex h-16 items-center justify-between">
        <Logo />
        <Link href={'/auth/login'}>
          <Button>Iniciar sesión</Button>
        </Link>
      </header>
    </Container>
  )
}
