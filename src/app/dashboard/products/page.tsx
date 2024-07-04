import Breadcrumb from '@/core/shared/components/breadcrumb'
import { Button } from '@/components/ui/button'
import Flex from '@/core/shared/components/layout/flex'
import { Table } from '@/core/shared/components/table/table'

export default function page() {
  const header = {
    id: 'Id',
    paymentStatus: 'Payment Status',
    paymentMethod: 'Payment Method',
    totalAmount: 'Total Amount',
    email: 'Email'
  }

  const data = [
    {
      id: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card',
      email: 'piguavejc@gmail.com',
      deleteAt: '2021-10-10'
    },
    {
      id: 'INV002',
      paymentStatus: 'Pending',
      totalAmount: '$150.00',
      paymentMethod: 'PayPal',
      email: 'piguavejc@gmail.com',
      deleteAt: '2021-10-10'
    },
    {
      id: 'INV003',
      paymentStatus: 'Unpaid',
      totalAmount: '$350.00',
      paymentMethod: 'Bank Transfer',
      email: 'piguavejc@gmail.com',
      deleteAt: '2021-10-10'
    },
    {
      id: 'INV004',
      paymentStatus: 'Paid',
      totalAmount: '$450.00',
      paymentMethod: 'Credit Card',
      email: 'piguavejc@gmail.com',
      deleteAt: '2021-10-10'
    },
    {
      id: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal',
      email: 'piguavejc@gmail.com',
      deleteAt: '2021-10-10'
    },
    {
      id: 'INV006',
      paymentStatus: 'Pending',
      totalAmount: '$200.00',
      paymentMethod: 'Bank Transfer',
      email: 'piguavejc@gmail.com',
      deleteAt: '2021-10-10'
    },
    {
      id: 'INV007',
      paymentStatus: 'Unpaid',
      totalAmount: '$300.00',
      paymentMethod: 'Credit Card',
      email: 'piguavejc@gmail.com',
      deleteAt: '2021-10-10'
    }
  ]

  return (
    <Flex className="w-full flex-col items-start justify-start space-y-2">
      <Breadcrumb />
      <Table
        data={data}
        className="w-full max-w-6xl self-center"
        header={header}
        actions={({ entity }) => (
          <Flex>
            <Button>editar {entity.id}</Button>
            <Button>mostrar</Button>
            <Button>eliminar</Button>
          </Flex>
        )}
      />
    </Flex>
  )
}
