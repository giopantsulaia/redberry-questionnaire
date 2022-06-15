<template>
  <form class="flex flex-col w-5/12" @submit.prevent="submitForm">
    <label for="first_name" class="mb-2 font-black text-xl"
      >უკვე აცრილი ხარ?*</label
    >
    <div class="flex items-center text-lg">
      <input
        v-model="had_vaccine"
        type="radio"
        name="had_vaccine"
        :value="true"
        class="outline-none my-3 px-4 mr-3"
      />
      კი
    </div>
    <div class="flex items-center text-lg">
      <input
        v-model="had_vaccine"
        type="radio"
        :value="false"
        name="had_vaccine"
        class="outline-none my-3 px-4 mr-3"
      />არა
    </div>
    <div v-if="had_vaccine" class="flex flex-col mt-6">
      <label for="vaccination_stage" class="font-black text-xl"
        >აირჩიე რა ეტაპზე ხარ*</label
      >
      <div class="flex items-center text-lg mt-2">
        <input
          v-model="vaccination_stage"
          type="radio"
          value="first_dosage_and_registered_on_the_second"
          name="vaccination_stage"
          class="outline-none my-3 px-4 mr-3"
        />პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
      </div>
      <div class="flex items-center text-lg">
        <input
          v-model="vaccination_stage"
          type="radio"
          value="fully_vaccinated"
          name="vaccination_stage"
          class="outline-none my-3 px-4 mr-3"
        />სრულად აცრილი ვარ
      </div>
      <div class="flex items-center text-lg">
        <input
          v-model="vaccination_stage"
          type="radio"
          value="first_dosage_and_not_registered_on_the_second"
          name="vaccination_stage"
          class="outline-none my-3 px-4 mr-3"
        />პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
      </div>
      <div
        v-if="
          vaccination_stage === 'first_dosage_and_not_registered_on_the_second'
        "
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
        <input
          v-model="waiting_for"
          type="radio"
          value="registered_and_waiting"
          name="antibodies_test_date"
          class="outline-none my-3 px-4 mr-3"
        />დარეგისტრირებული ვარ და ველოდები რიცხვს
      </div>
      <div class="flex items-center text-lg">
        <input
          v-model="waiting_for"
          type="radio"
          value="not_going_to_vaccinate"
          class="outline-none my-3 px-4 mr-3"
        />არ ვგეგმავ
      </div>
      <div class="flex items-center text-lg">
        <input
          v-model="waiting_for"
          type="radio"
          value="had_covid_and_going_to_vaccinate"
          class="outline-none my-3 px-4 mr-3"
        />გადატანილი მაქვს და ვგეგმავ აცრას
      </div>
      <div
        v-if="waiting_for === 'had_covid_and_going_to_vaccinate'"
        class="w-96 mt-8 ml-6 whitespace-normal"
      >
        <p>
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
    <p v-if="error !== ''" class="text-red-600 text-base mt-2">
      {{ invalid }}
    </p>
    <div class="absolute left-1/2 bottom-36 flex">
      <button type="button" class="-ml-16" @click="navigateBack">
        <img src="../images/arrowleft.png" alt="next" />
      </button>
      <button class="ml-24 z-50">
        <img src="../images/arrow.png" alt="next" />
      </button>
    </div>
  </form>
  <div class="mr-16 -translate-y-16">
    <img src="../images/img3.png" alt="" width="700" class="mt-20" />
  </div>
</template>
<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      had_vaccine: null,
      vaccination_stage: "",
      waiting_for: "",
      error: "",
    };
  },
  computed: {
    invalid() {
      return this.had_vaccine === null
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : this.stageShown && this.vaccination_stage === ""
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : !this.stageShown && this.waiting_for === ""
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : "";
    },
    stageShown() {
      return this.had_vaccine === true;
    },
  },
  methods: {
    submitForm() {
      this.error = this.invalid;
      if (this.error !== "") {
        return;
      }
      this.waiting_for = this.stageShown ? "" : this.waiting_for;
      this.vaccination_stage = !this.stageShown ? "" : this.vaccination_stage;
      store.dispatch("saveDataToStore", {
        firstname: store.state.first_name,
        lastname: store.state.last_name,
        email: store.state.email,
        had_covid: store.state.had_covid,
        had_antibody_test: store.state.had_antibody_test,
        antibodies: store.state.antibodies,
        had_covid_date: store.state.had_covid_date,
        had_vaccine: this.had_vaccine,
        vaccination_stage: this.vaccination_stage,
        waiting_for: this.waiting_for,
      });
      this.$router.push("/covid-policy");
    },
    navigateBack() {
      this.$router.push("/covid-info");
    },
  },
};
</script>
<style>
a.router-link {
  margin-right: 30px;
}
</style>
