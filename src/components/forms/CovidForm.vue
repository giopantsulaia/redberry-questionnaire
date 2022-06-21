<template>
  <Form class="flex flex-col lg:w-4/12 w-full" @submit="submitForm">
    <label for="first_name" class="mb-2 font-black text-xl"
      >გაქვს გადატანილი Covid-19?*</label
    >
    <div class="flex items-center text-lg">
      <Field
        v-model="had_covid"
        type="radio"
        name="had_covid"
        rules="required"
        value="yes"
        class="outline-none my-3 px-4 mr-3"
      />
      კი
    </div>
    <div class="flex items-center text-lg">
      <Field
        v-model="had_covid"
        type="radio"
        value="no"
        rules="required"
        name="had_covid"
        class="outline-none my-3 px-4 mr-3"
        @click="clearAntibodyValue"
      />არა
    </div>

    <div class="flex items-center text-lg">
      <Field
        v-model="had_covid"
        type="radio"
        value="have_right_now"
        name="had_covid"
        class="outline-none my-3 px-4 mr-3"
        @click="clearAntibodyValue"
      />
      ახლა მაქვს
    </div>
    <ErrorMessage class="text-red-600 text-sm mt-1" name="had_covid" />
    <div v-if="had_covid === 'yes'" class="flex flex-col mt-6">
      <label for="had_antibody_test" class="font-black text-xl"
        >ანტისხეულების ტესტი გაქვს გაკეთებული?*</label
      >
      <div class="flex items-center text-lg">
        <Field
          v-model="had_antibody_test"
          type="radio"
          :value="true"
          rules="requiredradio"
          name="had_antibody_test"
          class="outline-none my-3 px-4 mr-3"
        />კი
      </div>
      <div class="flex items-center text-lg">
        <Field
          v-model="had_antibody_test"
          type="radio"
          :value="false"
          name="had_antibody_test"
          class="outline-none my-3 px-4 mr-3"
        />არა
      </div>
      <ErrorMessage
        class="text-red-600 text-sm mt-1"
        name="had_antibody_test"
      />
    </div>
    <div v-if="had_antibody_test" class="flex flex-col mt-6">
      <label for="antibodies_test_date" class="font-black text-xl"
        >თუ გახსოვთ,გთხვოთ მიუთითეთ ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*</label
      >
      <Field
        v-model="antibodies.test_date"
        type="text"
        name="antibodies_test_date"
        placeholder="რიცხვი"
        rules="required"
        onfocus="(this.type='date')"
        class="outline-none border border-gray-600 my-3 px-4 mr-3 h-12"
      />
      <ErrorMessage
        class="text-red-600 text-sm mt-1"
        name="antibodies_test_date"
      />
      <Field
        v-model="antibodies.number"
        type="number"
        name="antibodies_test_number"
        placeholder="ანტისხეულების რაოდენობა"
        rules="required"
        class="outline-none border border-gray-600 my-3 px-4 mr-3 h-12"
      />
      <ErrorMessage
        class="text-red-600 text-sm mt-1"
        name="antibodies_test_number"
      />
    </div>
    <div v-else-if="had_antibody_test === false" class="flex flex-col mt-6">
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
    <div
      class="lg:absolute lg:left-1/2 lg:bottom-36 flex justify-center z-50 mt-16 lg:mt-0 pb-8"
    >
      <button type="button" class="lg:-ml-16 mr-8" @click="navigateBack">
        <img src="@/assets/icons/arrowleft.svg" alt="next" />
      </button>
      <button class="lg:ml-24 ml-8">
        <img src="@/assets/icons/arrow.svg" alt="next" />
      </button>
    </div>
  </Form>
  <div class="mr-16 lg:block hidden -translate-y-16">
    <img src="@/assets/images/img2.png" alt="" width="700" />
  </div>
</template>
<script>
import store from "@/store/index.js";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
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
    },
    submitForm() {
      this.had_antibody_test =
        this.had_covid !== "yes" ? null : this.had_antibody_test;
      this.covid_sickness_date =
        this.had_antibody_test === null ? "" : this.covid_sickness_date;
      this.antibodies.test_date =
        this.had_antibody_test === false ? "" : this.antibodies.test_date;
      store.dispatch("saveDataToStore", {
        firstname: store.state.first_name,
        lastname: store.state.last_name,
        email: store.state.email,
        had_covid: this.had_covid,
        had_antibody_test: this.had_antibody_test,
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
