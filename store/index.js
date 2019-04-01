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
      fetch (context) {
        return axios.get('http://localhost:3001/cars').then((res) => {
          context.store.commit('setCars', res.data)
        })
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
      }
    }
  })
}

export default createStore
