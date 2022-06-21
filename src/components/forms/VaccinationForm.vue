<template>
  <Form class="flex flex-col lg:w-5/12 w-full" @submit="submitForm">
    <label for="first_name" class="mb-2 font-black text-xl"
      >უკვე აცრილი ხარ?*</label
    >
    <covid-info-radio-input
      v-model="had_vaccine"
      rules="required"
      name="had_vaccine"
      label="კი"
      value="true"
      @click="clearWaitingForValue"
    />
    <covid-info-radio-input
      v-model="had_vaccine"
      rules="required"
      name="had_vaccine"
      label="არა"
      value="false"
      @click="clearVaccinationStageValue"
    />
    <ErrorMessage class="text-red-600 text-sm mt-1" name="had_vaccine" />
    <div v-if="had_vaccine === 'true'" class="flex flex-col mt-6">
      <label for="vaccination_stage" class="font-black text-xl"
        >აირჩიე რა ეტაპზე ხარ*</label
      >
      <covid-info-radio-input
        v-model="vaccination_stage"
        class="mt-2"
        rules="required"
        label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
        name="vaccination_stage"
        value="first_dosage_and_registered_on_the_second"
      />
      <covid-info-radio-input
        v-model="vaccination_stage"
        label="სრულად აცრილი ვარ"
        rules="required"
        name="vaccination_stage"
        value="fully_vaccinated"
      />
      <covid-info-radio-input
        v-model="vaccination_stage"
        rules="required"
        label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
        name="vaccination_stage"
        value="first_dosage_and_not_registered_yet"
      />
      <ErrorMessage
        class="text-red-600 text-sm mt-1"
        name="vaccination_stage"
      />
      <div
        v-if="vaccination_stage === 'first_dosage_and_not_registered_yet'"
        class="w-64 mt-8 ml-6 whitespace-normal"
      >
        რომ არ გადადო,<br />
        ბარემ ახლავე დარეგისტრირდი
        <a
          href="https://booking.moh.gov.ge/"
          class="text-blue-600"
          target="_blank"
          >https://booking.moh.gov.ge/
        </a>
      </div>
    </div>
    <div v-else-if="had_vaccine === 'false'" class="flex flex-col mt-6">
      <label for="antibodies_test_date" class="font-black text-xl"
        >რას ელოდები?*</label
      >
      <covid-info-radio-input
        v-model="i_am_waiting"
        class="mt-2"
        rules="required"
        label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
        name="i_am_waiting"
        value="registered_and_waiting"
      />
      <covid-info-radio-input
        v-model="i_am_waiting"
        rules="required"
        label="არ ვგეგმავ"
        name="i_am_waiting"
        value="not_planning"
      />
      <covid-info-radio-input
        v-model="i_am_waiting"
        rules="required"
        label="გადატანილი მაქვს და ვგეგმავ აცრას"
        name="i_am_waiting"
        value="had_covid_and_planning_to_be_vaccinated"
      />
      <ErrorMessage class="text-red-600 text-sm mt-1" name="i_am_waiting" />
      <vaccination-link-suggestion
        v-if="i_am_waiting === 'had_covid_and_planning_to_be_vaccinated'"
      />
    </div>
    <navigation-arrows @onClick="navigateBack" />
  </Form>
  <div class="md:mr-16 -translate-y-16 md:block hidden">
    <img
      src="@/assets/images/doctor.png"
      alt="doctor"
      width="700"
      class="mt-20"
    />
  </div>
</template>
<script>
import store from "@/store/index.js";
import { Form, ErrorMessage } from "vee-validate";
import CovidInfoRadioInput from "@/components/CovidInfoRadioInput.vue";
import VaccinationLinkSuggestion from "@/components/VaccinationLinkSuggestion.vue";
import NavigationArrows from "../NavigationArrows.vue";
export default {
  components: {
    Form,
    ErrorMessage,
    CovidInfoRadioInput,
    VaccinationLinkSuggestion,
    NavigationArrows,
  },
  data() {
    return {
      had_vaccine: null,
      vaccination_stage: "",
      i_am_waiting: "",
    };
  },

  methods: {
    clearVaccinationStageValue() {
      this.vaccination_stage = "";
    },
    clearWaitingForValue() {
      this.i_am_waiting = "";
    },
    submitForm() {
      this.vaccination_stage = !this.had_vaccine ? "" : this.vaccination_stage;
      store.dispatch("storeVaccinationData", {
        had_vaccine:
          this.had_vaccine === "false"
            ? false
            : this.had_vaccine === "true"
            ? true
            : null,
        vaccination_stage: this.vaccination_stage,
        i_am_waiting: this.i_am_waiting,
      });
      this.$router.push({ name: "CovidPolicy" });
    },
    navigateBack() {
      this.$router.push({ name: "CovidInfo" });
    },
  },
};
</script>
