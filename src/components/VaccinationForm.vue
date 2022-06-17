<template>
  <Form class="flex flex-col lg:w-5/12 w-full" @submit="submitForm">
    <label for="first_name" class="mb-2 font-black text-xl"
      >უკვე აცრილი ხარ?*</label
    >
    <div class="flex items-center text-lg">
      <Field
        v-model="had_vaccine"
        type="radio"
        rules="requiredradio"
        name="had_vaccine"
        :value="true"
        class="outline-none my-3 px-4 mr-3"
      />
      კი
    </div>
    <div class="flex items-center text-lg">
      <Field
        v-model="had_vaccine"
        type="radio"
        :value="false"
        name="had_vaccine"
        class="outline-none my-3 px-4 mr-3"
      />არა
    </div>
    <ErrorMessage class="text-red-600 text-sm mt-1" name="had_vaccine" />
    <div v-if="had_vaccine" class="flex flex-col mt-6">
      <label for="vaccination_stage" class="font-black text-xl"
        >აირჩიე რა ეტაპზე ხარ*</label
      >
      <div class="flex items-center text-lg mt-2">
        <Field
          v-model="vaccination_stage"
          type="radio"
          rules="required"
          value="first_dosage_and_registered_on_the_second"
          name="vaccination_stage"
          class="outline-none my-3 px-4 mr-3"
        />პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
      </div>
      <div class="flex items-center text-lg">
        <Field
          v-model="vaccination_stage"
          type="radio"
          value="fully_vaccinated"
          name="vaccination_stage"
          class="outline-none my-3 px-4 mr-3"
        />სრულად აცრილი ვარ
      </div>
      <div class="flex items-center text-lg">
        <Field
          v-model="vaccination_stage"
          type="radio"
          value="first_dosage_and_not_registered_yet"
          name="vaccination_stage"
          class="outline-none my-3 px-4 mr-3"
        />პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
      </div>
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
    <div v-else-if="had_vaccine === false" class="flex flex-col mt-6">
      <label for="antibodies_test_date" class="font-black text-xl"
        >რას ელოდები?*</label
      >
      <div class="flex items-center text-lg mt-2">
        <Field
          v-model="i_am_waiting"
          type="radio"
          rules="required"
          value="registered_and_waiting"
          name="i_am_waiting"
          class="outline-none my-3 px-4 mr-3"
        />დარეგისტრირებული ვარ და ველოდები რიცხვს
      </div>
      <div class="flex items-center text-lg">
        <Field
          v-model="i_am_waiting"
          type="radio"
          name="i_am_waiting"
          value="not_planning"
          class="outline-none my-3 px-4 mr-3"
        />არ ვგეგმავ
      </div>
      <div class="flex items-center text-lg">
        <Field
          v-model="i_am_waiting"
          type="radio"
          name="i_am_waiting"
          value="had_covid_and_planning_to_be_vaccinated"
          class="outline-none my-3 px-4 mr-3"
        />გადატანილი მაქვს და ვგეგმავ აცრას
      </div>
      <ErrorMessage class="text-red-600 text-sm mt-1" name="i_am_waiting" />
      <div
        v-if="i_am_waiting === 'had_covid_and_planning_to_be_vaccinated'"
        class="md:w-96 mt-8 md:ml-6 md:whitespace-normal"
      >
        <p class="">
          ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
          გაკეთება.
        </p>
        <p class="mt-6">
          👉 რეგისტრაციის ბმული
          <a href="https://booking.moh.gov.ge/" class="text-blue-600">
            https://booking.moh.gov.ge/</a
          >
        </p>
      </div>
    </div>

    <div
      class="md:absolute md:left-1/2 md:bottom-36 flex justify-center z-50 mt-24 md:mt-0 lg:pb-0 pb-6"
    >
      <button type="button" class="-ml-16" @click="navigateBack">
        <img src="../images/arrowleft.png" alt="next" />
      </button>
      <button class="ml-24 z-50">
        <img src="../images/arrow.png" alt="next" />
      </button>
    </div>
  </Form>
  <div class="md:mr-16 -translate-y-16 md:block hidden">
    <img src="../images/img3.png" alt="" width="700" class="mt-20" />
  </div>
</template>
<script>
import store from "../store/index.js";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
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
    submitForm() {
      this.i_am_waiting = this.had_vaccine ? null : this.i_am_waiting;
      this.vaccination_stage = !this.had_vaccine ? "" : this.vaccination_stage;
      store.dispatch("saveDataToStore", {
        firstname: store.state.first_name,
        lastname: store.state.last_name,
        email: store.state.email,
        had_covid: store.state.had_covid,
        had_antibody_test: store.state.had_antibody_test,
        antibodies: store.state.antibodies,
        covid_sickness_date: store.state.covid_sickness_date,
        had_vaccine: this.had_vaccine,
        vaccination_stage: this.vaccination_stage,
        i_am_waiting: this.i_am_waiting,
      });
      this.$router.push("/covid-policy");
    },
    navigateBack() {
      this.$router.push("/covid-info");
    },
  },
};
</script>
