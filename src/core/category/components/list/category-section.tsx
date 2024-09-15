import Flex from '@/core/shared/components/layout/flex'
import ListCategory from '@/core/category/components/list/list-category'
import { SearchCategoryUseCase } from '@/core/category/aplication/use-case/search-category.use-case'
import Section from '@/core/shared/components/section/section'
import { Suspense } from 'react'

export default async function CategorySection() {
  const result = await SearchCategoryUseCase.run()

  if (result.error) {
    return <div>Error</div>
  }

  const categories = result.data

  if (categories === null) {
    return <div>Loading...</div>
  }

  return (
    <Suspense>
      <Section isEmpty={categories.length === 0}>
        <Flex className="justify-start overflow-x-auto pb-4">
          <ListCategory categories={categories} />
        </Flex>
      </Section>
    </Suspense>
  )
}
