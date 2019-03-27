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
      setCars(vueContext) {
        vueContext.commit('setCars', cars)
      }
    },
    getters: {
      loadedCars(state) {
        return state.loadedCars;
      }
    }
  })
}

export default createStore
