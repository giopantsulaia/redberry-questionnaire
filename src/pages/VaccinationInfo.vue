<template>
  <div>
    <the-header :page="3"></the-header>
    <main-layout>
      <vaccination-form></vaccination-form>
    </main-layout>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import MainLayout from "@/components/MainLayout.vue";
import VaccinationForm from "@/components/VaccinationForm.vue";
export default {
  components: { TheHeader, MainLayout, VaccinationForm },
};
</script>
<style scoped></style>
