import { types } from './types'

export const mutations = {
  [types.SET_TUTORS] (state, tutors) {
    state.tutors = tutors
  },
  [types.ADD_TUTOR] (state, tutor) {
    state.tutors.push(tutor)
  },
  [types.SET_LOADING] (state, isLoading) {
    state.isLoading = isLoading
  }
}
