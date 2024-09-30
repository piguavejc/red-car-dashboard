import Breadcrumb from '@/core/shared/components/breadcrumb'
import ButtonCreate from '@/core/shared/components/buttons/button-create'
import ButtonDelete from '@/core/shared/components/buttons/button-delete'
import ButtonEdit from '@/core/shared/components/buttons/button-edit'
import ButtonShow from '@/core/shared/components/buttons/button-show'
import Flex from '@/core/shared/components/layout/flex'
import { GetProductTotalUseCase } from '@/core/product/aplication/use-case/get-product-total-use-case'
import { PaginationEnum } from '@/core/shared/enums/pagination.enum'
import { SearchProductUseCase } from '@/core/product/aplication/use-case/search-product.use-case'
import { Table } from '@/core/shared/components/table/table'
export const dynamic = 'force-dynamic'

export default async function page({
  searchParams: { limit, offset }
}: {
  searchParams: { limit?: number; offset?: number }
}) {
  const header = {
    name: 'Nombre',
    laboratory: {
      name: 'Laboratorio'
    },
    category: {
      name: 'Categoría'
    },
    createdAt: 'Creado en',
    updatedAt: 'Actualizado en'
  }

  limit = limit || PaginationEnum.LIMIT
  offset = offset || PaginationEnum.OFFSET

  const result = await SearchProductUseCase.run({
    limit,
    offset
  })

  const productsTotalResult = await GetProductTotalUseCase.run()

  if (productsTotalResult.error !== null) {
    return <div>Error</div>
  }

  if (result.error !== null) {
    return <div>Error</div>
  }

  const products = result.data

  return (
    <Flex className="w-full items-start justify-start" initialValue={'column'}>
      <Breadcrumb />
      <Flex className="w-full self-center" initialValue="column">
        <ButtonCreate className="self-end" />
        <Table
          data={products}
          total={productsTotalResult.data.total}
          className="w-full self-center"
          header={header}
          actions={({ entity }) => (
            <Flex className="justify-end">
              <ButtonEdit id={entity.id} />
              <ButtonShow id={entity.id} />
              <ButtonDelete id={entity.id} />
            </Flex>
          )}
        />
      </Flex>
    </Flex>
  )
}
