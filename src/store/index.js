import { Promise } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    page: []
  },
  getters: {
    getPaymentList: (state) => (page) => {
      for (let key in state.paymentList) {
        if (key == page) {
          return state.paymentList[key]
        }
      }
      return
    },
    getPage: state => { return state.page }
  },
  mutations: {
    setPage(state, number) {
      state.page = number
    },
    setPaymentList(state, list) {
      state.paymentList = list
    },
    addNewPaymentItem(state, item) {
      let count = 0
      for (let it in state.paymentList) {
        if (state.paymentList[it].length == 5) {
          count++
          if (count == Object.keys(state.paymentList).length) {
            Vue.set(state.paymentList, `page${count + 1}`, [item])
            state.page.push(`page${count + 1}`)
          }
        }
        else {
          state.paymentList[`page${count + 1}`].push(item)
        }
      }
    }
  },
  actions: {
    fetchData({ dispatch }) {
      return new Promise((resolve) => {
        fetch("https://raw.githubusercontent.com/1Dmitriy10/json/main/paymentItems.json")
          .then(result => {
            resolve(result.json())
          })
          .catch(error => console.log(error))

      })
        .then(res => {
          dispatch('fetchPage', res);
          dispatch('fetchPaymentList', res);

        })
    },
    fetchPage({ commit }, res) {
      let page = []
      for (let key in res) {
        if (key != "category")
          page.push(key)
      }
      commit("setPage", page)
    },
    fetchPaymentList({ commit }, res) {
      let list = res
      for (let key in list) {
        if (key == "category")
          delete list[key]
      }
      commit("setPaymentList", list)
    },
    fetchNewItem({ commit }, res) {
      commit("addNewPaymentItem", res)
    }
  },
  modules: {
  }
})
