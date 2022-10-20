import { Store } from "./core/Store.js";

export const storeA = new Store({
  state: {
    menu: "",
  },

  // state의 값은 오직 mutations를 통해서 변경할 수 있다.
  mutations: {
    SET_CAFEMENU(state, payload) {
      state.menu = payload;
    },
  },
});
