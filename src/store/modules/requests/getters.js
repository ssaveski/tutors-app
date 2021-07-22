
export const getters = {
  requests (state, _, _2, rootGetters) {
    const tutorId = rootGetters.userId
    return state.requests.filter(r => r.tutorId === tutorId)
  },
  hasRequests (state, getters) {
    return getters?.requests.length
  }
}
