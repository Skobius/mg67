import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import name from './name'
import applications from './applications'
import categories from './categories'
import tournaments from './tournaments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      error: null
  },
  mutations: {
      setError(state, error) {
          state.error = error
      },
      clearError(state) {
          state.error = null
      }
  },
  getters: {
      error: s => s.error
  },
  modules: {
    auth, name, applications, categories, tournaments
  }
})
