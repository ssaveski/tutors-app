import { Tutor } from '../../../classes/tutor'

export const getters = {
  tutors (state) {
    return state.tutors.map(Tutor.fromApi)
  },

  hasTutors (state) {
    return state?.tutors.length
  },

  isLoading (state) {
    return state?.isLoading
  }
}
