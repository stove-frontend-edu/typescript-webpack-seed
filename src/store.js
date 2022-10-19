import { Store } from './core/Store.js';

export const store = new Store({
  state: {
    a: 10,
    b: 20,
  },

  // state의 값은 오직 mutations를 통해서 변경할 수 있다.
  mutations: {
    SET_A (state, payload) {
      state.a = payload;
    },

    SET_B (state, payload) {
      state.b = payload;
    }
  },
});
