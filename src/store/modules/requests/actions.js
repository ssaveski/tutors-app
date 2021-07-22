import { types } from './types'
import { Request } from '../../../classes/request'

export const actions = {
  sendRequest
}

async function sendRequest ({ commit }, request) {
  request.id = new Date().toISOString()
  const requestData = new Request(request)
  commit(types.ADD_REQUEST, requestData)
}
