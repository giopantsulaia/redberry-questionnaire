import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      had_covid: "",
      had_antibody_test: "",
      antibodies: {},
      had_covid_date: "",
    };
  },
  mutations: {
    saveUserData(state, payload) {
      console.log(state);
      state.first_name = payload.firstname;
      state.last_name = payload.lastname;
      state.email = payload.email;
      state.had_covid = payload.had_covid;
      state.had_antibody_test = payload.had_antibody_test;
      state.antibodies = payload.antibodies;
      state.had_covid_date = payload.had_covid_date;
    },
  },
  actions: {
    saveDataToStore(context, payload) {
      const data = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        had_covid: payload.had_covid,
        had_antibody_test: payload.had_antibody_test,
        antibodies: payload.antibodies,
        had_covid_date: payload.had_covid_date,
      };
      context.commit("saveUserData", data);
    },
  },
});

export default store;
