import { HttpClient } from '../classes/httpClient'
import { Tutor } from '../classes/tutor'

export const tutorsService = new HttpClient(
  'tutors',
  Tutor.fromApi,
  Tutor.toApi
)
