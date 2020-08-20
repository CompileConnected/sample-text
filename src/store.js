import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import modules from './persistence'
console.log("MMM", modules)
Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: "52508dc6-bae8-4ac3-8f1c-0bad26bbdb76",
  storage: localStorage  
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin], 
  modules
})