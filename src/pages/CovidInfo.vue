<template>
  <div>
    <the-header :page="2"></the-header>
    <main-layout>
      <covid-form></covid-form>
    </main-layout>
  </div>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import MainLayout from "@/components/MainLayout.vue";
import CovidForm from "../components/CovidForm.vue";
export default {
  components: { TheHeader, MainLayout, CovidForm },
};
</script>
<style scoped></style>
