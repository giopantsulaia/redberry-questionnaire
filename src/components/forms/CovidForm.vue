<template>
  <Form class="flex flex-col lg:w-4/12 w-full" @submit="submitForm">
    <label for="first_name" class="mb-2 font-black text-xl"
      >გაქვს გადატანილი Covid-19?*</label
    >
    <covid-info-radio-input
      v-model="had_covid"
      name="had_covid"
      rules="required"
      value="yes"
      label="კი"
    ></covid-info-radio-input>
    <covid-info-radio-input
      v-model="had_covid"
      name="had_covid"
      rules="required"
      value="no"
      label="არა"
      @click="clearAntibodyValue"
    />
    <covid-info-radio-input
      v-model="had_covid"
      name="had_covid"
      rules="required"
      value="have_right_now"
      label="ახლა მაქვს"
      @click="clearDateValues"
    />
    <ErrorMessage class="text-red-600 text-sm mt-1" name="had_covid" />
    <div v-if="had_covid === 'yes'" class="flex flex-col mt-6">
      <label for="had_antibody_test" class="font-black text-xl"
        >ანტისხეულების ტესტი გაქვს გაკეთებული?*</label
      >
      <covid-info-radio-input
        v-model="had_antibody_test"
        name="had_antibody_test"
        rules="required"
        value="true"
        label="კი"
        @click="clearCovidSicknessValue"
      />
      <covid-info-radio-input
        v-model="had_antibody_test"
        name="had_antibody_test"
        rules="required"
        value="false"
        label="არა"
        @click="clearTestDateValue"
      />
      <ErrorMessage
        class="text-red-600 text-sm mt-1"
        name="had_antibody_test"
      />
    </div>
    <div v-if="had_antibody_test === 'true'" class="flex flex-col mt-6">
      <label for="antibodies_test_date" class="font-black text-xl"
        >თუ გახსოვთ,გთხვოთ მიუთითეთ ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*</label
      >
      <anti-bodies
        v-model="antibodies.test_date"
        name="antibodies_test_date"
        rules="required"
        inputType="(this.type='date')"
        placeholder="რიცხვი"
      />
      <anti-bodies
        v-model="antibodies.number"
        name="antibodies_test_number"
        rules="required"
        inputType="(this.type='number')"
        placeholder="ანტისხეულების რაოდენობა"
      />
    </div>
    <div v-else-if="had_antibody_test === 'false'" class="flex flex-col mt-6">
      <label for="had_antibody_test" class="font-black text-xl"
        >მიუთითე მიახლოებით პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</label
      >
      <Field
        v-model="covid_sickness_date"
        type="text"
        placeholder="დდ/თთ/წწ"
        rules="required"
        onfocus="(this.type='date')"
        name="covid_sickness_date"
        class="outline-none border border-gray-600 my-3 px-4 mr-3 h-12"
      />
    </div>
    <ErrorMessage
      class="text-red-600 text-sm mt-1"
      name="covid_sickness_date"
    />
    <navigation-arrows @onClick="navigateBack" />
  </Form>
  <div class="mr-16 lg:block hidden -translate-y-16">
    <img src="@/assets/images/bubble-boy.png" alt="bubble-boy" width="700" />
  </div>
</template>
<script>
import store from "@/store/index.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import CovidInfoRadioInput from "@/components/CovidInfoRadioInput.vue";
import AntiBodies from "../AntiBodies.vue";
import NavigationArrows from "../NavigationArrows.vue";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    CovidInfoRadioInput,
    AntiBodies,
    NavigationArrows,
  },
  data() {
    return {
      had_covid: "",
      had_antibody_test: null,
      antibodies: {
        test_date: "",
        number: "",
      },
      covid_sickness_date: "",
    };
  },
  methods: {
    clearAntibodyValue() {
      this.had_antibody_test = null;
      this.covid_sickness_date = "";
      this.antibodies.test_date = "";
    },
    clearCovidSicknessValue() {
      this.covid_sickness_date = "";
    },
    clearTestDateValue() {
      this.antibodies.test_date = "";
    },
    clearDateValues() {
      this.covid_sickness_date = "";
      this.antibodies.test_date = "";
    },
    submitForm() {
      store.dispatch("storeCovidData", {
        had_covid: this.had_covid,
        had_antibody_test:
          this.had_covid !== "yes"
            ? null
            : this.had_antibody_test === "true"
            ? true
            : this.had_antibody_test === "false"
            ? false
            : null,
        antibodies: this.antibodies,
        covid_sickness_date: this.covid_sickness_date,
      });
      this.$router.push({ name: "VaccinationInfo" });
    },
    navigateBack() {
      this.$router.push({ name: "Identification" });
    },
  },
};
</script>
