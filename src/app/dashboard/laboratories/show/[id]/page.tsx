import Flex from '@/core/shared/components/layout/flex'
import { SearchByIdLaboratoryUseCase } from '@/core/laboratory/aplication/use-case/search-by-id-laboratory.use-case'
import ShowSection from '@/core/shared/components/section/show-section'
import { redirect } from 'next/navigation'

export default async function ShowPage({ params }: { params: { id: string } }) {
  const laboratoryId = params.id

  const result = await SearchByIdLaboratoryUseCase.run(laboratoryId)
  if (result.error !== null) {
    return redirect('/dashboard/categories')
  }

  const laboratory = result.data

  return (
    <Flex className="flex w-full items-center justify-center">
      <ShowSection data={laboratory} />
    </Flex>
  )
}
