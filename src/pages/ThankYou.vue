<template>
  <section
    @mouseover="sendData"
    class="h-screen flex flex-col items-center justify-center bg-[#232323]"
  >
    <div class="flex flex-col">
      <transition name="big" appear>
        <img
          src="../images/thankyoustar1.png"
          alt="star"
          class="mb-6 ml-6"
          width="70"
        />
      </transition>
      <p class="text-8xl font-black text-white tracking-widest">მადლობა</p>
      <transition name="small" appear>
        <img
          src="../images/thankyoustar1.png"
          alt="star"
          class="self-end mr-10"
          width="35"
      /></transition>
    </div>
  </section>
</template>
<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      data: {
        first_name: store.state.first_name,
        last_name: store.state.last_name,
        email: store.state.email,
        had_covid: store.state.had_covid,
        had_antibody_test: store.state.had_antibody_test,
        antibodies: store.state.antibodies,
        had_covid_date: store.state.had_covid_date,
        had_vaccine: store.state.had_vaccine,
        vaccination_stage: store.state.vaccination_stage,
        waiting_for: store.state.waiting_for,
        non_formal_meetings: store.state.non_formal_meetings,
        number_of_days_from_office: store.state.number_of_days_from_office,
        what_about_meetings_in_live: store.state.what_about_meetings_in_live,
        tell_us_your_opinion_about_us:
          store.state.tell_us_your_opinion_about_us,
      },
    };
  },

  created() {
    console.log(this.data);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(this.body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => console.log(response.status))
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
</script>
<style scoped>
.big-enter-from {
  transform: translateY(60px);
  opacity: 0;
}
.big-enter-to {
  opacity: 1;
}

.big-enter-active {
  transition: all 0.8s ease 0.8s;
}
.small-enter-from {
  transform: translateY(-60px);
  opacity: 0;
}
.small-enter-to {
  opacity: 1;
}

.small-enter-active {
  transition: all 0.8s ease 0.8s;
}
</style>
