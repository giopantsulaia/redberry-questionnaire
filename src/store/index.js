import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      had_covid: "",
      had_antibody_test: null,
      antibodies: {
        test_date: "",
        number: null,
      },
      covid_sickness_date: "",
      had_vaccine: "",
      vaccination_stage: "",
      i_am_waiting: "",
      non_formal_meetings: "",
      number_of_days_from_office: null,
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },
  mutations: {
    saveUserData(state, payload) {
      state.first_name = payload.firstname;
      state.last_name = payload.lastname;
      state.email = payload.email;
      state.had_covid = payload.had_covid;
      state.had_antibody_test = payload.had_antibody_test;
      state.antibodies = payload.antibodies;
      state.covid_sickness_date = payload.covid_sickness_date;
      state.had_vaccine = payload.had_vaccine;
      state.vaccination_stage = payload.vaccination_stage;
      state.i_am_waiting = payload.i_am_waiting;
      state.non_formal_meetings = payload.non_formal_meetings;
      state.number_of_days_from_office = payload.number_of_days_from_office;
      state.what_about_meetings_in_live = payload.what_about_meetings_in_live;
      state.tell_us_your_opinion_about_us =
        payload.tell_us_your_opinion_about_us;
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
        covid_sickness_date: payload.covid_sickness_date,
        had_vaccine: payload.had_vaccine,
        vaccination_stage: payload.vaccination_stage,
        i_am_waiting: payload.i_am_waiting,
        non_formal_meetings: payload.non_formal_meetings,
        number_of_days_from_office: payload.number_of_days_from_office,
        what_about_meetings_in_live: payload.what_about_meetings_in_live,
        tell_us_your_opinion_about_us: payload.tell_us_your_opinion_about_us,
      };
      context.commit("saveUserData", data);
    },
  },
});

export default store;
