<template>
  <section
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
      body: store.state,
    };
  },
  created() {
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
