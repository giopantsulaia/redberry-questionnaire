<template>
  <form class="flex flex-col w-4/12" @submit.prevent="submitForm">
    <label for="first_name" class="mb-2 font-black">სახელი*</label>
    <input
      v-model="firstname"
      type="text"
      placeholder="First Name"
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
      placeholder="Last Name"
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
      placeholder="E Mail"
      name="email"
      required
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <p v-if="email_error !== ''" class="text-red-500 text-sm mt-2">
      {{ emailError }}
    </p>
    <div class="mt-24 border-t border-gray-600 w-72 pt-4 text-[#626262]">
      *-ით მონიშნული ველების შევსება სავალდებულოა
    </div>
    <div class="absolute left-1/2 bottom-36">
      <button><img src="../images/arrow.png" alt="next" /></button>
    </div>
  </form>
  <div class="mr-16 -translate-y-16">
    <img src="../images/img1.png" alt="" width="700" />
    <img
      src="../images/yellowline.png"
      alt=""
      class="absolute top-44 opacity-70"
    />
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
      return !this.email.includes("@redberry.ge")
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
