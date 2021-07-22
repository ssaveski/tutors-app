import { types } from './types'

export const mutations = {
  [types.ADD_REQUEST] (state, value) {
    state.requests.push(value)
  }
}
