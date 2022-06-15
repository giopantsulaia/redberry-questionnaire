<template>
  <the-header :page="2"></the-header>
  <main-layout>
    <covid-questions></covid-questions>
  </main-layout>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import MainLayout from "@/components/MainLayout.vue";
import CovidQuestions from "../components/CovidQuestions.vue";
export default {
  components: { TheHeader, MainLayout, CovidQuestions },
};
</script>
<style scoped></style>
