<template>
  <Form
    class="flex flex-col lg:w-4/12 w-full lg:h-4/5 h-auto lg:overflow-y-auto lg:overflow-x-hidden text-[#232323] pb-8 lg:pb-0"
    @submit="submitForm"
  >
    <p class="w-11/12">
      რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც
      ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში
      მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
    </p>
    <p class="mt-4 pb-8">
      პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
      კომუნიკაციაც გაიშვიათდა.
    </p>
    <label for="non_formal_meetings" class="mb-2 font-black text-base"
      >რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
      სადაც ყველა სურვილისამებრ ჩაერთვება?*</label
    >

    <div class="flex items-center text-base ml-4 mt-2">
      <Field
        v-model="non_formal_meetings"
        type="radio"
        rules="required"
        name="non_formal_meetings"
        value="twice_a_week"
        class="outline-none my-2 px-4 mr-3"
      />
      კვირაში ორჯერ
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="non_formal_meetings"
        type="radio"
        value="once_a_week"
        name="non_formal_meetings"
        class="outline-none my-2 px-4 mr-3"
      />კვირაში ერთხელ
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="non_formal_meetings"
        type="radio"
        value="once_in_a_two_weeks"
        name="non_formal_meetings"
        class="outline-none my-2 px-4 mr-3"
      />ორ კვირაში ერთხელ
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="non_formal_meetings"
        type="radio"
        value="once_in_a_month"
        name="non_formal_meetings"
        class="outline-none my-2 px-4 mr-3"
      />თვეში ერთხელ
    </div>
    <ErrorMessage
      class="text-red-600 text-sm mt-1"
      name="non_formal_meetings"
    />
    <label for="non_formal_meetings" class="mb-2 font-black text-base mt-6"
      >კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</label
    >
    <div class="flex items-center text-base mt-2 ml-4">
      <Field
        v-model="number_of_days_from_office"
        type="radio"
        :value="0"
        rules="required"
        name="number_of_days_from_office"
        class="outline-none my-2 px-4 mr-3"
      />0
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="number_of_days_from_office"
        type="radio"
        :value="1"
        name="number_of_days_from_office"
        class="outline-none my-2 px-4 mr-3"
      />1
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="number_of_days_from_office"
        type="radio"
        :value="2"
        name="number_of_days_from_office"
        class="outline-none my-2 px-4 mr-3"
      />2
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="number_of_days_from_office"
        type="radio"
        :value="3"
        name="number_of_days_from_office"
        class="outline-none my-2 px-4 mr-3"
      />3
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="number_of_days_from_office"
        type="radio"
        :value="4"
        name="number_of_days_from_office"
        class="outline-none my-2 px-4 mr-3"
      />4
    </div>
    <div class="flex items-center text-base ml-4">
      <Field
        v-model="number_of_days_from_office"
        type="radio"
        :value="5"
        name="number_of_days_from_office"
        class="outline-none my-2 px-4 mr-3"
      />5
    </div>
    <ErrorMessage
      class="text-red-600 text-sm mt-1"
      name="number_of_days_from_office"
    />
    <div class="mt-4">
      <label
        for="what_about_meetings_in_live"
        class="mb-2 font-black text-base mt-6"
        >რას ფიქრობ ფიზიკურ შეკრებებზე?</label
      >
      <textarea
        id="what_about_meetings_in_live"
        v-model="what_about_meetings_in_live"
        name="what_about_meetings_in_live"
        rows="7"
        class="border border-gray-500 resize-none outline-none px-2 lg:w-11/12 w-full mt-2"
      ></textarea>
    </div>
    <div class="mt-4">
      <label
        for="tell_us_your_opinion_about_us"
        class="mb-2 font-black text-base mt-6"
        >რას ფიქრობ არსებულ გარემოზე: <br />
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</label
      >
      <textarea
        id="tell_us_your_opinion_about_us"
        v-model="tell_us_your_opinion_about_us"
        name="tell_us_your_opinion_about_us"
        rows="7"
        class="border border-gray-500 resize-none outline-none px-2 lg:w-11/12 w-full mt-2"
      ></textarea>
    </div>
    <button
      class="lg:absolute lg:bottom-24 lg:left-96 rounded-3xl bg-[#208298] w-36 text-white py-2 mt-6"
    >
      დასრულება
    </button>
    <div
      class="lg:absolute lg:left-1/2 lg:bottom-36 flex justify-center ml-14 mt-8 pb-6"
    >
      <button type="button" class="-ml-16" @click="navigateBack">
        <img src="../images/arrowleft.png" alt="next" />
      </button>
    </div>
  </Form>
  <div class="mr-16 -translate-y-16 lg:block hidden">
    <img src="../images/img4.png" alt="" width="500" class="mt-10" />
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
      non_formal_meetings: "",
      number_of_days_from_office: null,
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
      meetings_error: "",
      work_from_office_error: "",
    };
  },
  computed: {
    meetingsError() {
      return this.non_formal_meetings === ""
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : "";
    },
    workFromOfficeError() {
      return this.number_of_days_from_office === null
        ? "*-ით მონიშნული ველების შევსება სავალდებულოა"
        : "";
    },
  },
  methods: {
    submitForm() {
      this.meetings_error = this.meetingsError;
      this.work_from_office_error = this.workFromOfficeError;
      if (this.meetings_error !== "" || this.work_from_office_error !== "") {
        return;
      }
      store.dispatch("saveDataToStore", {
        firstname: store.state.first_name,
        lastname: store.state.last_name,
        email: store.state.email,
        had_covid: store.state.had_covid,
        had_antibody_test: store.state.had_antibody_test,
        antibodies: store.state.antibodies,
        covid_sickness_date: store.state.covid_sickness_date,
        had_vaccine: store.state.had_vaccine,
        vaccination_stage: store.state.vaccination_stage,
        i_am_waiting: store.state.i_am_waiting,
        non_formal_meetings: this.non_formal_meetings,
        number_of_days_from_office: this.number_of_days_from_office,
        what_about_meetings_in_live: this.what_about_meetings_in_live,
        tell_us_your_opinion_about_us: this.tell_us_your_opinion_about_us,
      });
      this.$router.push("/thank-you");
    },
    navigateBack() {
      this.$router.push("/vaccination-info");
    },
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fe3b1f;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(77, 77, 77);
}
</style>
