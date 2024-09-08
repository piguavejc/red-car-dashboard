'use server'

import { API_URL } from '@/lib/env'
import axios from 'axios'
import { cookies } from 'next/headers'

const myAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

myAxios.interceptors.request.use(
  (config) => {
    const accessToken = cookies().get('accessToken')?.value ?? ''
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)
export default myAxios
