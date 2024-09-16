import Breadcrumb from '@/core/shared/components/breadcrumb'
import ButtonCreate from '@/core/shared/components/buttons/button-create'
import ButtonDelete from '@/core/shared/components/buttons/button-delete'
import ButtonEdit from '@/core/shared/components/buttons/button-edit'
import ButtonShow from '@/core/shared/components/buttons/button-show'
import Flex from '@/core/shared/components/layout/flex'
import { SearchProductUseCase } from '@/core/product/aplication/use-case/search-product.use-case'
import { Table } from '@/core/shared/components/table/table'
export const dynamic = 'force-dynamic'

export default async function page() {
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

  const result = await SearchProductUseCase.run()

  if (result.error !== null) {
    return <div>Error</div>
  }

  const products = result.data

  return (
    <Flex className="w-full items-start justify-start" initialValue={'column'}>
      <Breadcrumb />
      <ButtonCreate />
      <Table
        data={products}
        className="w-full max-w-6xl self-center"
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
  )
}
