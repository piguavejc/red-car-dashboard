import Breadcrumb from '@/core/shared/components/breadcrumb'
import ButtonCreate from '@/core/shared/components/buttons/button-create'
import ButtonDelete from '@/core/shared/components/buttons/button-delete'
import ButtonEdit from '@/core/shared/components/buttons/button-edit'
import ButtonShow from '@/core/shared/components/buttons/button-show'
import Flex from '@/core/shared/components/layout/flex'
import { GetCategoryTotalUseCase } from '@/core/category/aplication/use-case/get-total-category-use-case'
import { PaginationEnum } from '@/core/shared/enums/pagination.enum'
import { SearchCategoryUseCase } from '@/core/category/aplication/use-case/search-category.use-case'
import { Table } from '@/core/shared/components/table/table'
export const dynamic = 'force-dynamic'

export default async function page({
  searchParams: { limit, offset }
}: {
  searchParams: { limit?: number; offset?: number }
}) {
  const header = {
    name: 'Nombre',
    createdAt: 'Creado en',
    updatedAt: 'Actualizado en'
  }
  limit = limit || PaginationEnum.LIMIT
  offset = offset || PaginationEnum.OFFSET

  const result = await SearchCategoryUseCase.run({
    limit,
    offset
  })

  const totalCategoryResult = await GetCategoryTotalUseCase.run()

  if (totalCategoryResult.error !== null) {
    return <div>Error</div>
  }

  if (result.error !== null) {
    return <div>Error</div>
  }

  const categories = result.data

  return (
    <Flex className="w-full items-start justify-start" initialValue={'column'}>
      <Breadcrumb />
      <Flex className="w-full self-center" initialValue="column">
        <ButtonCreate className="self-end" />
        <Table
          total={totalCategoryResult.data.total}
          data={categories}
          className="w-full"
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
