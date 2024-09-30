import Breadcrumb from '@/core/shared/components/breadcrumb'
import ButtonCreate from '@/core/shared/components/buttons/button-create'
import ButtonDelete from '@/core/shared/components/buttons/button-delete'
import ButtonEdit from '@/core/shared/components/buttons/button-edit'
import ButtonShow from '@/core/shared/components/buttons/button-show'
import Flex from '@/core/shared/components/layout/flex'
import { GetLaboratoryTotalUseCase } from '@/core/laboratory/aplication/use-case/get-total-laboratory-use-case'
import { PaginationEnum } from '@/core/shared/enums/pagination.enum'
import { SearchLaboratoryUseCase } from '@/core/laboratory/aplication/use-case/search-laboratory.use-case'
import { Table } from '@/core/shared/components/table/table'
export const dynamic = 'force-dynamic'

export default async function page({
  searchParams: { limit, offset }
}: {
  searchParams: { limit?: number; offset?: number; page?: number }
}) {
  const header = {
    name: 'Nombre',
    createdAt: 'Creado en',
    updatedAt: 'Actualizado en'
  }

  limit = limit || PaginationEnum.LIMIT
  offset = offset || PaginationEnum.OFFSET

  const result = await SearchLaboratoryUseCase.run({
    limit,
    offset
  })

  const totalLaboratoriesResult = await GetLaboratoryTotalUseCase.run()

  if (totalLaboratoriesResult.error !== null) {
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
          total={totalLaboratoriesResult.data.total}
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
