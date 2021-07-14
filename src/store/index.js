import Vue from "vue";
import Vuex from "vuex";

import palannig from "../data/palannig.json";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    palannig:palannig.palannig
  },
  mutations: {
  
   
  },
  actions: {},
  modules: {},
  getters: {

   

    datapalannig: (state) => () => {


      
      return   state.palannig;
    }
  },
});
