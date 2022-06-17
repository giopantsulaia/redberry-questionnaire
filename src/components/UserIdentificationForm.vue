<template>
  <Form class="flex flex-col lg:w-4/12 w-full" @submit="submitForm">
    <label for="first_name" class="mb-2 font-black">სახელი*</label>
    <Field
      v-model="firstname"
      type="text "
      rules="required|min:2|max:255|alpha"
      placeholder="იოსებ"
      name="first_name"
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <ErrorMessage class="text-red-600 text-sm mt-1" name="first_name" />
    <label for="last_name" class="mt-8 mb-2 font-black">გვარი*</label>
    <Field
      v-model="lastname"
      type="text"
      placeholder="ჯუღაშვილი"
      rules="required|min:2|max:255|alpha"
      name="last_name"
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <ErrorMessage class="text-red-600 text-sm mt-1" name="last_name" />
    <label for="email" class="mt-8 mb-2 font-black">მეილი*</label>
    <Field
      v-model="email"
      name="email"
      type="email"
      placeholder="fbi@redberry.ge"
      rules="required|email|redberry_email"
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <ErrorMessage class="text-red-600 text-sm mt-1" name="email" />
    <div
      class="lg:mt-24 mt-10 border-t border-gray-600 w-72 pt-4 text-[#626262]"
    >
      *-ით მონიშნული ველების შევსება სავალდებულოა
    </div>
    <div
      class="lg:absolute mt-12 flex justify-center left-1/2 lg:bottom-36 bottom-32 z-50"
    >
      <button><img src="../images/arrow.png" alt="next" /></button>
    </div>
  </Form>
  <div class="lg:mr-16 lg:ml-0 ml-32 lg:block hidden -translate-y-16">
    <img src="../images/img1.png" alt="" width="700" />
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import store from "../store/index.js";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
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
      store.dispatch("saveDataToStore", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      });
      this.$router.push("/covid-info");
    },
  },
};
</script>
