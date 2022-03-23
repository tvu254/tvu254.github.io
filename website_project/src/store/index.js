import { createStore } from 'vuex';
import { UserModule } from "./UserModule";

export default createStore({
  state: {
  },

  // funcs that affect state directly
  mutations: {

  },

  // funcs called throughout app that call mutations
  actions: {
 
  },

  modules: {
    User: UserModule
  }
})
