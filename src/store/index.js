import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  mutations: {
    saveData(state, payload) {
      console.log(payload);
      state.first_name = payload.firstname;
      state.last_name = payload.lastname;
      state.email = payload.email;
    },
  },
  actions: {
    saveDataToStore(context, payload) {
      const data = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
      };
      context.commit("saveData", data);
    },
  },
});

export default store;
