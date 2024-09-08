'use server'

import {
  handlingError,
  type ResponseSA
} from '@/core/shared/infrastructure/action/shared'
import myAxios from '@/core/shared/infrastructure/my-axios'

export async function searchByCategory<RecordWithId>(
  resource: string,
  name: string
): Promise<ResponseSA<RecordWithId[]>> {
  const result = await handlingError<RecordWithId[]>(async () => {
    const result = await myAxios.get<RecordWithId[]>(
      `/${resource}/category?name=${name}`
    )
    return result.data
  })
  return result
}
