<template>
  <form class="flex flex-col w-4/12" @submit.prevent="submitForm">
    <label for="first_name" class="mb-2 font-black text-xl"
      >გაქვს გადატანილი Covid-19?*</label
    >
    <div class="flex items-center text-lg">
      <input
        v-model="had_covid"
        type="radio"
        name="had_covid"
        value="yes"
        class="outline-none my-3 px-4 mr-3"
      />
      კი
    </div>
    <div class="flex items-center text-lg">
      <input
        v-model="had_covid"
        type="radio"
        value="no"
        @click="clearAntibodyValue"
        name="had_covid"
        class="outline-none my-3 px-4 mr-3"
      />არა
    </div>
    <div class="flex items-center text-lg">
      <input
        v-model="had_covid"
        type="radio"
        value="have_covid_now"
        @click="clearAntibodyValue"
        name="had_covid"
        class="outline-none my-3 px-4 mr-3"
      />
      ახლა მაქვს
    </div>
    <div v-if="had_covid === 'yes'" class="flex flex-col mt-6">
      <label for="had_antibody_test" class="font-black text-xl"
        >ანტისხეულების ტესტი გაქვს გაკეთებული?*</label
      >
      <div class="flex items-center text-lg">
        <input
          v-model="had_antibody_test"
          type="radio"
          :value="true"
          name="had_antibody_test"
          class="outline-none my-3 px-4 mr-3"
        />კი
      </div>
      <div class="flex items-center text-lg">
        <input
          v-model="had_antibody_test"
          type="radio"
          :value="false"
          name="had_antibody_test"
          class="outline-none my-3 px-4 mr-3"
        />არა
      </div>
    </div>
    <div v-if="had_antibody_test" class="flex flex-col mt-6">
      <label for="antibodies_test_date" class="font-black text-xl"
        >თუ გახსოვთ,გთხვოთ მიუთითეთ ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*</label
      >
      <input
        v-model="antibodies.test_date"
        type="text"
        name="antibodies_test_date"
        placeholder="რიცხვი"
        onfocus="(this.type='date')"
        class="outline-none border border-gray-600 my-3 px-4 mr-3 h-12"
      />
      <input
        v-model="antibodies.number"
        type="number"
        placeholder="ანტისხეულების რაოდენობა"
        class="outline-none border border-gray-600 my-3 px-4 mr-3 h-12"
      />
    </div>
    <div v-else-if="had_antibody_test === false" class="flex flex-col mt-6">
      <label for="had_antibody_test" class="font-black text-xl"
        >მიუთითე მიახლოებით პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</label
      >
      <input
        v-model="had_covid_date"
        type="text"
        placeholder="დდ/თთ/წწ"
        onfocus="(this.type='date')"
        name="had_antibody_test"
        class="outline-none border border-gray-600 my-3 px-4 mr-3 h-12"
      />
    </div>
    <p v-if="error !== ''" class="text-red-600 text-sm">
      {{ invalid }}
    </p>
    <div class="absolute left-1/2 bottom-36 flex z-50">
      <button type="button" class="-ml-16" @click="navigateBack">
        <img src="../images/arrowleft.png" alt="next" />
      </button>
      <button class="ml-24">
        <img src="../images/arrow.png" alt="next" />
      </button>
    </div>
  </form>
  <div class="mr-16 -translate-y-16">
    <img src="../images/img2.png" alt="" width="700" />
  </div>
</template>
<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      had_covid: "",
      had_antibody_test: null,
      antibodies: {
        test_date: "",
        number: "",
      },
      had_covid_date: "",
      error: "",
    };
  },
  computed: {
    invalid() {
      return this.had_covid === ""
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : this.antibodyShown && this.had_antibody_test === null
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : this.testDateShown &&
          (this.antibodies.test_date === "" || this.antibodies.number === "")
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : this.hadCovidDateShown && this.had_covid_date === ""
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : "";
    },
    antibodyShown() {
      return this.had_covid === "yes";
    },
    testDateShown() {
      return this.had_antibody_test === true;
    },
    hadCovidDateShown() {
      return this.had_antibody_test === false;
    },
  },
  methods: {
    clearAntibodyValue() {
      this.had_antibody_test = null;
    },
    submitForm() {
      this.error = this.invalid;
      if (this.error !== "") {
        return;
      }
      this.had_antibody_test =
        this.had_covid !== "yes" ? null : this.had_antibody_test;
      this.had_covid_date =
        this.had_antibody_test === null ? "" : this.had_covid_date;
      store.dispatch("saveDataToStore", {
        firstname: store.state.first_name,
        lastname: store.state.last_name,
        email: store.state.email,
        had_covid: this.had_covid,
        had_antibody_test: this.had_antibody_test,
        antibodies: this.antibodies,
        had_covid_date: this.had_covid_date,
      });
      this.$router.push("/vaccination-info");
    },
    navigateBack() {
      this.$router.push("/identification");
    },
  },
};
</script>
<style>
a.router-link {
  margin-right: 30px;
}
</style>
