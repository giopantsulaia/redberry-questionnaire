<template>
  <Form
    class="flex flex-col lg:w-4/12 w-full lg:h-4/5 h-auto lg:overflow-y-auto lg:overflow-x-hidden text-[#232323] pb-8 lg:pb-0"
    @submit="submitForm"
  >
    <redberry-info />
    <label for="non_formal_meetings" class="mb-2 font-black text-base"
      >რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
      სადაც ყველა სურვილისამებრ ჩაერთვება?*</label
    >
    <radio-input-group
      v-model="non_formal_meetings"
      :options="options"
      class="ml-4"
    />
    <ErrorMessage
      class="text-red-600 text-sm mt-1"
      name="non_formal_meetings"
    />
    <label for="non_formal_meetings" class="mb-2 font-black text-base mt-6"
      >კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</label
    >
    <days-from-office
      v-model="number_of_days_from_office"
      :value="0"
      class="mt-2"
    />
    <days-from-office v-model="number_of_days_from_office" :value="1" />
    <days-from-office v-model="number_of_days_from_office" :value="2" />
    <days-from-office v-model="number_of_days_from_office" :value="3" />
    <days-from-office v-model="number_of_days_from_office" :value="4" />
    <days-from-office v-model="number_of_days_from_office" :value="5" />
    <ErrorMessage
      class="text-red-600 text-sm mt-1"
      name="number_of_days_from_office"
    />
    <optional-text-area
      v-model="what_about_meetings_in_live"
      name="what_about_meetings_in_live"
      label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
    />
    <optional-text-area
      v-model="tell_us_your_opinion_about_us"
      name="tell_us_your_opinion_about_us"
      label="რას ფიქრობ არსებულ გარემოზე: 
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
    />
    <button
      class="lg:absolute lg:bottom-24 lg:left-96 rounded-3xl bg-[#208298] w-36 text-white py-2 mt-6"
    >
      დასრულება
    </button>
    <div
      class="lg:absolute lg:left-1/2 lg:bottom-36 flex justify-center ml-14 mt-8 pb-6"
    >
      <button type="button" class="-ml-16" @click="navigateBack">
        <img src="@/assets/icons/arrow-left.svg" alt="previous-page" />
      </button>
    </div>
  </Form>
  <div class="mr-16 -translate-y-16 lg:block hidden">
    <img
      src="@/assets/images/bycicle-boy.png"
      alt="bycicle-boy"
      width="500"
      class="mt-10"
    />
  </div>
</template>
<script>
import store from "@/store/index.js";
import { Form, ErrorMessage } from "vee-validate";
import DaysFromOffice from "@/components/UI/inputs/DaysFromOffice.vue";
import OptionalTextArea from "@/components/UI/inputs/OptionalTextArea.vue";
import RedberryInfo from "@/components/UI/paragraphs/RedberryInfo.vue";
import RadioInputGroup from "@/components/UI/inputs/RadioInputGroup.vue";
export default {
  components: {
    Form,
    ErrorMessage,
    DaysFromOffice,
    OptionalTextArea,
    RedberryInfo,
    RadioInputGroup,
  },
  data() {
    return {
      non_formal_meetings: "",
      number_of_days_from_office: null,
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
      options: [
        {
          label: "კვირაში ორჯერ",
          value: "twice_a_week",
          name: "non_formal_meetings",
        },
        {
          label: "კვირაში ერთხელ",
          value: "once_a_week",
          name: "non_formal_meetings",
        },
        {
          label: "ორ კვირაში ერთხელ",
          value: "once_in_a_two_weeks",
          name: "non_formal_meetings",
        },
      ],
    };
  },
  methods: {
    submitForm() {
      store.dispatch("storeCovidPolicyData", {
        non_formal_meetings: this.non_formal_meetings,
        number_of_days_from_office: this.number_of_days_from_office,
        what_about_meetings_in_live: this.what_about_meetings_in_live,
        tell_us_your_opinion_about_us: this.tell_us_your_opinion_about_us,
      });
      this.$router.push({ name: "ThankYou" });
    },
    navigateBack() {
      this.$router.push({ name: "VaccinationInfo" });
    },
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #fe3b1f;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(77, 77, 77);
}
</style>
