import { AxiosError } from 'axios'

interface ErrorData {
  data: null
  error: string
}
interface ErrorData1<T> {
  data: T
  error: null
}

export type ResponseSA<T> = ErrorData | ErrorData1<T>

export async function handlingError<T>(
  fn: () => Promise<T>,
  urlRedirect?: string
): Promise<ResponseSA<T>> {
  try {
    const result = await fn()
    return { data: result, error: null }
  } catch (error: any) {
    console.error(error)
    if (error instanceof AxiosError) {
      return {
        data: null,
        error: error.response?.data.message ?? 'Error al conectar al API'
      }
    }
  }
  return { data: null, error: 'FatalError' }
}
