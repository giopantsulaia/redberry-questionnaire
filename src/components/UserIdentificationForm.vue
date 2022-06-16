<template>
  <form class="flex flex-col lg:w-4/12 w-full" @submit.prevent="submitForm">
    <label for="first_name" class="mb-2 font-black">სახელი*</label>
    <input
      v-model="firstname"
      type="text"
      placeholder="იოსებ"
      name="first_name"
      required
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <p v-if="name_error !== ''" class="text-red-500 text-sm mt-2">
      {{ nameError }}
    </p>
    <label for="last_name" class="mt-8 mb-2 font-black">გვარი*</label>
    <input
      v-model="lastname"
      type="text"
      placeholder="ჯუღაშვილი"
      name="last_name"
      required
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <p v-if="lastname_error !== ''" class="text-red-500 text-sm mt-2">
      {{ lastNameError }}
    </p>
    <label for="email" class="mt-8 mb-2 font-black">მეილი*</label>
    <input
      v-model="email"
      type="email"
      placeholder="fbi@redberry.ge"
      name="email"
      required
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <p v-if="email_error !== ''" class="text-red-500 text-sm mt-2">
      {{ emailError }}
    </p>
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
  </form>
  <div class="lg:mr-16 lg:ml-0 ml-32 lg:block hidden -translate-y-16">
    <img src="../images/img1.png" alt="" width="700" />
  </div>
</template>
<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      name_error: "",
      email_error: "",
      lastname_error: "",
    };
  },
  computed: {
    nameError() {
      return this.firstname.length < 3
        ? "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
        : this.firstname.length > 255
        ? "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
        : /^[a-zA-Zა-ჰ]+$/.test(this.firstname) === false
        ? "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს"
        : "";
    },
    emailError() {
      return this.email.substring(this.email.length - 12) !== "@redberry.ge"
        ? "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)"
        : this.email === ""
        ? "იმეილის შეყვანა აუცილებელია"
        : !this.email.includes("@")
        ? "თქვენ მიერ შეყვანილი მეილი არასწორია"
        : "";
    },
    lastNameError() {
      return this.lastname.length < 3
        ? "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
        : this.lastname.length > 255
        ? "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
        : /^[a-zA-Zა-ჰ]+$/.test(this.lastname) === false
        ? "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს"
        : "";
    },
  },
  methods: {
    submitForm() {
      this.email_error = this.emailError;
      this.name_error = this.nameError;
      this.lastname_error = this.lastNameError;

      if (this.email_error || this.name_error || this.lastname_error) {
        return;
      }
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
