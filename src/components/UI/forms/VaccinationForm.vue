<template>
  <Form class="flex flex-col lg:w-5/12 w-full" @submit="submitForm">
    <label for="first_name" class="mb-2 font-black text-xl"
      >უკვე აცრილი ხარ?*</label
    >
    <radio-input
      v-model="had_vaccine"
      rules="required"
      name="had_vaccine"
      label="კი"
      value="true"
      @click="clearWaitingForValue"
    />
    <radio-input
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
      <radio-input-group
        v-model="vaccination_stage"
        :options="stage_options"
        class="mt-2"
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
      <radio-input-group
        v-model="i_am_waiting"
        :options="waiting_options"
        class="mt-2"
        @click="log(this.i_am_waiting)"
      />
      <ErrorMessage class="text-red-600 text-sm mt-1" name="i_am_waiting" />
      <vaccination-link-suggestion
        v-if="i_am_waiting === 'had_covid_and_planning_to_be_vaccinated'"
      />
    </div>
    <navigation-arrows @on-click="navigateBack" />
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
import RadioInput from "@/components/UI/inputs/RadioInput.vue";
import VaccinationLinkSuggestion from "@/components/UI/paragraphs/VaccinationLinkSuggestion.vue";
import NavigationArrows from "@/components/UI/icons/NavigationArrows.vue";
import RadioInputGroup from "@/components/UI/inputs/RadioInputGroup.vue";
export default {
  components: {
    Form,
    ErrorMessage,
    RadioInput,
    VaccinationLinkSuggestion,
    NavigationArrows,
    RadioInputGroup,
  },
  data() {
    return {
      had_vaccine: null,
      vaccination_stage: "",
      i_am_waiting: "",
      stage_options: [
        {
          label: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
          value: "first_dosage_and_registered_on_the_second",
          name: "vaccination_stage",
        },
        {
          label: "სრულად აცრილი ვარ",
          value: "fully_vaccinated",
          name: "vaccination_stage",
        },
        {
          label: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
          value: "first_dosage_and_not_registered_yet",
          name: "vaccination_stage",
        },
      ],
      waiting_options: [
        {
          label: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
          value: "registered_and_waiting",
          name: "i_am_waiting",
        },
        {
          label: "არ ვგეგმავ",
          value: "not_planning",
          name: "i_am_waiting",
        },
        {
          label: "გადატანილი მაქვს და ვგეგმავ აცრას",
          value: "had_covid_and_planning_to_be_vaccinated",
          name: "i_am_waiting",
        },
      ],
    };
  },

  methods: {
    log(d) {
      console.log(d);
    },
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
