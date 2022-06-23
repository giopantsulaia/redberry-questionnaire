<template>
  <Form class="flex flex-col lg:w-4/12 w-full" @submit="submitForm">
    <text-input
      v-model="firstname"
      name="first_name"
      placeholder="იოსებ"
      rules="required|min:2|max:255|alpha"
      label="სახელი*"
    />
    <text-input
      v-model="lastname"
      name="last_name"
      placeholder="ჯუღაშვილი"
      rules="required|min:2|max:255|alpha"
      label="გვარი*"
      class="mt-8"
    />
    <text-input
      v-model="email"
      name="email"
      type="email"
      placeholder="fbi@redberry.ge"
      rules="required|email|redberry_email"
      label="მეილი*"
      class="mt-8"
    />
    <div
      class="lg:mt-24 mt-10 border-t border-gray-600 w-72 pt-4 text-[#626262]"
    >
      *-ით მონიშნული ველების შევსება სავალდებულოა
    </div>
    <div
      class="lg:absolute mt-12 flex justify-center left-1/2 lg:bottom-36 bottom-32 z-50"
    >
      <button><img src="@/assets/icons/arrow-right.svg" alt="next" /></button>
    </div>
  </Form>
  <div class="lg:mr-16 lg:ml-0 ml-32 lg:block hidden -translate-y-16">
    <img
      src="@/assets/images/boy-and-girl.png"
      alt="boy-and-girl"
      width="700"
    />
  </div>
</template>
<script>
import { Form } from "vee-validate";
import store from "@/store/index.js";
import TextInput from "../inputs/TextInput.vue";
export default {
  components: {
    Form,
    TextInput,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      store.dispatch("storeIdentificationData", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      });
      this.$router.push({ name: "CovidInfo" });
    },
  },
};
</script>
