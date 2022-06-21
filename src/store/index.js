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
    saveIdentificationData(state, payload) {
      state.first_name = payload.firstname;
      state.last_name = payload.lastname;
      state.email = payload.email;
    },
    saveCovidData(state, payload) {
      state.had_covid = payload.had_covid;
      state.had_antibody_test = payload.had_antibody_test;
      state.antibodies = payload.antibodies;
      state.covid_sickness_date = payload.covid_sickness_date;
    },
    saveVaccinationData(state, payload) {
      state.had_vaccine = payload.had_vaccine;
      state.vaccination_stage = payload.vaccination_stage;
      state.i_am_waiting = payload.i_am_waiting;
    },
    savePolicyData(state, payload) {
      state.non_formal_meetings = payload.non_formal_meetings;
      state.number_of_days_from_office = payload.number_of_days_from_office;
      state.what_about_meetings_in_live = payload.what_about_meetings_in_live;
      state.tell_us_your_opinion_about_us =
        payload.tell_us_your_opinion_about_us;
    },
  },

  actions: {
    storeIdentificationData(context, payload) {
      context.commit("saveIdentificationData", {
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
      });
    },
    storeCovidData(context, payload) {
      context.commit("saveCovidData", {
        ...this.state,
        had_covid: payload.had_covid,
        had_antibody_test: payload.had_antibody_test,
        antibodies: payload.antibodies,
        covid_sickness_date: payload.covid_sickness_date,
      });
    },
    storeVaccinationData(context, payload) {
      context.commit("saveVaccinationData", {
        ...this.state,
        had_vaccine: payload.had_vaccine,
        vaccination_stage: payload.vaccination_stage,
        i_am_waiting: payload.i_am_waiting,
      });
    },
    storeCovidPolicyData(context, payload) {
      context.commit("savePolicyData", {
        ...this.state,
        non_formal_meetings: payload.non_formal_meetings,
        number_of_days_from_office: payload.number_of_days_from_office,
        what_about_meetings_in_live: payload.what_about_meetings_in_live,
        tell_us_your_opinion_about_us: payload.tell_us_your_opinion_about_us,
      });
    },
  },
});

export default store;
