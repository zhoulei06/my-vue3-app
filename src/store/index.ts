/*
 * @Description:
 * @Author: ZHOUL
 * @Date: 2021-04-19 20:21:09
 * @LastEditTime: 2021-04-19 20:35:05
 * @LastEditors:
 */
import { createStore } from "vuex";

const defaultState = {
  count: 0,
};

// Create a new store instance.
export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      console.log(context);
      context.commit("increment");
    },
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    },
  },
});
