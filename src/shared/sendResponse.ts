import { Response } from 'express'

type responseData<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  }
  data?: T | null
}
export const sendResponse = <T>(res: Response, data: responseData<T>): void => {
  const reponseData: responseData<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null,
  }

  res.status(data.statusCode).json(reponseData)
}
