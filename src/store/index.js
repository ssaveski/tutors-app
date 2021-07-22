import Vue from 'vue'
import Vuex from 'vuex'
import { tutors } from './modules/tutors/index'
import { requests } from './modules/requests'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    modules: {
      tutors,
      requests
    },
    state () {
      return {
        userId: 'c3'
      }
    },

    getters: {
      userId (state) {
        return state.userId
      }
    }
  })
