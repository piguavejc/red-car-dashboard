import Flex from '@/core/shared/components/layout/flex'
import { SearchByIdLaboratoryUseCase } from '@/core/laboratory/aplication/use-case/search-by-id-laboratory.use-case'
import SectionEdit from '@/core/laboratory/components/sections/section-edit'

export default async function LaboratoryEditPage({
  params
}: {
  params: { id: string }
}) {
  const LaboratoryId = params.id

  const result = await SearchByIdLaboratoryUseCase.run(LaboratoryId)

  if (result.error !== null) {
    return <div>Error</div>
  }

  const laboratory = result.data
  return (
    <Flex className="w-full flex-1 items-stretch">
      <SectionEdit laboratory={laboratory} />
    </Flex>
  )
}
