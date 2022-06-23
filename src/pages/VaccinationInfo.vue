<template>
  <div>
    <the-header :page="3"></the-header>
    <main-layout>
      <vaccination-form></vaccination-form>
    </main-layout>
  </div>
</template>
<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
import VaccinationForm from "@/components/UI/forms/VaccinationForm.vue";
export default {
  components: { TheHeader, MainLayout, VaccinationForm },
};
</script>
