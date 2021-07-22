import { HttpClient } from '../classes/httpClient'
import { Request } from '../classes/request'

export const tutorsService = new HttpClient(
  'requests',
  Request.fromApi,
  Request.toApi
)
