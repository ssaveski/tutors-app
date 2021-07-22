import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export const requests = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
