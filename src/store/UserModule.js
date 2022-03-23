export const UserModule = {
    namespaced: true,

    state: {
        user: null
      },
    
      // funcs that affect state directly
      mutations: {
        SET_USER(state, user) {
          state.user = user;
        }
      },
    
      // funcs called throughout app that call mutations
      actions: {
        setUser({ commit }, user) {
          commit('SET_USER', user);
        }
      },
}