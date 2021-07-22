import { types } from './types'
import { tutorsService } from '../../../services/tutors'

export const actions = {
  registerTutor,
  fetchTutors
}

async function registerTutor ({ commit }, tutor) {
  commit(types.SET_LOADING, true)
  const response = await tutorsService.create(tutor)

  if (response.success) {
    commit(types.ADD_TUTOR, response.data)
  }
  commit(types.SET_LOADING, false)
}

async function fetchTutors ({ commit }) {
  commit(types.SET_LOADING, true)
  const response = await tutorsService.fetch()

  if (response.success) {
    commit(types.SET_TUTORS, response.data)
  }
  commit(types.SET_LOADING, false)
}
