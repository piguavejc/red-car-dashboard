import CardItem from '@/core/shared/components/card-item'
import Flex from '@/core/shared/components/layout/flex'
import MixChart from '@/core/shared/components/mix-chart'
import { Suspense } from 'react'
import { getTotalAction } from '@/core/shared/infrastructure/action/action'

export default async function DashboardPage() {
  const resultProducts = await getTotalAction('products')
  const resultCategories = await getTotalAction('categories')
  const resultLaboratories = await getTotalAction('laboratories')

  if (
    resultProducts.error !== null ||
    resultCategories.error !== null ||
    resultLaboratories.error !== null
  ) {
    throw new Error('Error al obtener los datos')
  }

  const totalProducts = resultProducts.data.total.toString()
  const totalCategories = resultCategories.data.total.toString()
  const totalLaboratories = resultLaboratories.data.total.toString()

  return (
    <Flex
      className="w-full flex-1 items-center lg:flex-row lg:items-center lg:justify-center"
      initialValue="column"
    >
      <Suspense fallback={<p>loading...</p>}>
        <Flex
          initialValue="column"
          className="w-full items-center space-y-4 md:max-w-5xl"
        >
          <Flex
            className="flex w-full flex-col justify-center space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0"
            initialValue="column"
          >
            <CardItem header="Categoria" text={totalCategories} />
            <CardItem header="Laboratorio" text={totalLaboratories} />
            <CardItem header="Productos" text={totalProducts} />
          </Flex>
          <MixChart />
        </Flex>
      </Suspense>
    </Flex>
  )
}
