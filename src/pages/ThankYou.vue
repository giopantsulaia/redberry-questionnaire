<template>
  <section class="h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col">
      <transition name="big" appear>
        <img
          src="@/assets/icons/thankyoustar1.svg"
          alt="star"
          class="mb-6 ml-6"
          width="70"
        />
      </transition>
      <p class="lg:text-8xl text-6xl font-black text-white tracking-widest">
        მადლობა
      </p>
      <transition name="small" appear>
        <img
          src="@/assets/icons/thankyoustar1.svg"
          alt="star"
          class="self-end mr-10"
          width="35"
      /></transition>
    </div>
  </section>
</template>
<script>
import store from "@/store/index.js";
export default {
  data() {
    return {
      body: store.state,
    };
  },
  created() {
    if (this.body.antibodies.test_date !== "") {
      let [year, month, day] = this.body.antibodies.test_date.split("-");
      this.body.antibodies.test_date = [month, day, year].join("/");
    }
    if (this.body.covid_sickness_date !== "") {
      let [year, month, day] = this.body.covid_sickness_date.split("-");
      this.body.covid_sickness_date = [month, day, year].join("/");
    }
    Object.keys(this.body).forEach((key) => {
      if (
        this.body[key] === "" ||
        this.body[key] === null ||
        this.body[key].test_date === ""
      ) {
        delete this.body[key];
      }
    });

    fetch("https://covid19.devtest.ge/api/create", {
      method: "POST",
      body: JSON.stringify(this.body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
    setTimeout(() => {
      this.$router.push({ name: "StartQuestionnaire" });
    }, 5000);
  },
};
</script>

<style scoped>
section {
  background-color: #232323;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

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
