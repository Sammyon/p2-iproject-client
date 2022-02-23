import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    covidDatas: []
  },
  getters: {
    
  },
  mutations: {
    SET_COVID_DATAS(state, payload) {
      state.covidDatas = payload;
    }
  },
  actions: {
    async getCovidData(context) {
      try {
        const {data} = await axios.get("http://localhost:3000/covidDatas")

        context.commit("SET_COVID_DATAS", data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
