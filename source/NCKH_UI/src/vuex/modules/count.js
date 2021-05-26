export const moduleCount = {
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {},
  getters: {},
};
