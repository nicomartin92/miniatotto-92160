import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedCars: {}
    },
    mutations: {
      setCars(state, cars) {
        state.loadedCars = cars
      }
    },
    actions: {
      /* async nuxtServerInit ({ commit }) {
        const response = await axios.get('http://localhost:3001/cars')
        console.warn('hellllooooooooooooooooooooooooooooooooooooooooooooooooo prefetch data ?')
        return Promise.resolve(commit('setCars', response.data))
      }, */
      setCars({ commit }, cars) {
        commit('setCars', cars)
      }
    },
    getters: {
      loadedCars(state) {
        return state.loadedCars
      }
    }
  })
}

export default createStore
