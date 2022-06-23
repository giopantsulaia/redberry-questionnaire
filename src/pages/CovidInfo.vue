<template>
  <div>
    <the-header :page="2"></the-header>
    <main-layout>
      <covid-form></covid-form>
    </main-layout>
  </div>
</template>
<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
import CovidForm from "@/components/UI/forms/CovidForm.vue";
export default {
  components: { TheHeader, MainLayout, CovidForm },
};
</script>
<style scoped></style>
