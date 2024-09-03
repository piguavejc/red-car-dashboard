import Container from '@/core/shared/components/container'
import Flex from '@/core/shared/components/layout/flex'

export default function Footer() {
  return (
    <footer>
      <Container className="rounded-md bg-gray-800 p-4">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
      <Container className="rounded-md bg-gray-950 p-4">
        <Flex>
          <p>Copyright © piguavejc</p>
          <p>Creado por jeandev</p>
        </Flex>
      </Container>
    </footer>
  )
}
