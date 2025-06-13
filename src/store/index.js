import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: {
      namespaced: true,
      state: {
        user: null,
      },
      getters: {
        isAuthenticated(state) {
          return state.user !== null;
        },
      },
      mutations: {
        login(state, payload) {
          state.user = { ...payload };
        },
        logout(state) {
          state.user = null;
        },
      },
      actions: {
        signIn({ commit }, user) {
          commit("login", user);
        },
        signOut({ commit }) {
          commit("logout");
        },
      },
    },
  },
});

// eslint-disable-next-line no-unused-vars
store.subscribe((mutation, state) => {
  console.log(mutation.type);
  console.log(mutation.payload);
});

export default store;
