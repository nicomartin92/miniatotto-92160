import Vuex from 'vuex'
import axios from 'axios'

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
      async fetch ({ store, params }) {
        let { data } = await axios.get('http://localhost:3001/cars')
        store.commit('setCars', data)
      },
      setCars({ commit }, cars) {
        commit('setCars', cars)
      }
    },
    getters: {
      loadedCars(state) {
        return state.loadedCars
      },
      frenchCars(state) {
        return state.loadedCars.filter(car => car.country === 'fr')
      },
      germanCars(state) {
        return state.loadedCars.filter(car => car.country === 'de')
      },
      italianCars(state) {
        return state.loadedCars.filter(car => car.country === 'it')
      },
      sizeCars18(state) {
        return state.loadedCars.filter(car => car.size === '1/18')
      },
      sizeCars12(state) {
        return state.loadedCars.filter(car => car.size === '1/12')
      },
      preferenceCars(state) {
        let sort = state.loadedCars.filter(car => car.preference > 0).sort((a, b) => {
          return a.preference - b.preference
        })
        return sort
      }
    }
  })
}

export default createStore
