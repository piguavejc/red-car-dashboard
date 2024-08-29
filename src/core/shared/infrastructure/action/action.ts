'use server'

import {
  handlingError,
  type ResponseSA
} from '@/core/shared/infrastructure/action/shared'
import myAxios from '@/core/shared/infrastructure/my-axios'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function deleteAction<RecordWithId>(
  resource: string,
  id: string
): Promise<ResponseSA<RecordWithId>> {
  const result = await handlingError<RecordWithId>(async () => {
    const result = await myAxios.delete<RecordWithId>(`/${resource}/${id}`)
    return result.data
  })
  revalidatePath(`/dashboard/${resource}`)
  return result
}

export async function createAction<RecordWithId>(
  resource: string,
  data: Record<string, unknown>
): Promise<ResponseSA<RecordWithId>> {
  const result = await handlingError<RecordWithId>(async () => {
    const result = await myAxios.post<RecordWithId>(`/${resource}`, data)
    return result.data
  })
  if (result.error !== null) {
    revalidatePath(`/dashboard/${resource}`)
    redirect(`/dashboard/${resource}`)
  }
  return result
}

export async function updateAction<RecordWithId>(
  resource: string,
  id: string,
  data: Record<string, unknown>
): Promise<ResponseSA<RecordWithId>> {
  const result = await handlingError<RecordWithId>(async () => {
    const result = await myAxios.put<RecordWithId>(`/${resource}/${id}`, data)
    return result.data
  })

  if (result.error === null) {
    revalidatePath(`/dashboard/${resource}`)
    redirect(`/dashboard/${resource}`)
  }
  return result
}

export async function searchAction<RecordWithId>(
  resource: string
): Promise<ResponseSA<RecordWithId[]>> {
  const result = await handlingError<RecordWithId[]>(async () => {
    const result = await myAxios.get<RecordWithId[]>(`/${resource}`)
    return result.data
  })
  return result
}

export async function searchByIdAction<RecordWithId>(
  resource: string,
  id: string
): Promise<ResponseSA<RecordWithId>> {
  const result = await handlingError<RecordWithId>(async () => {
    const result = await myAxios.get<RecordWithId>(`/${resource}/${id}`)
    return result.data
  })
  return result
}
