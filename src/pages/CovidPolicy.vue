<template>
  <div>
    <the-header :page="4"></the-header>
    <main-layout>
      <covid-policy-form></covid-policy-form>
    </main-layout>
  </div>
</template>
<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
import CovidPolicyForm from "@/components/UI/forms/CovidPolicyForm.vue";
export default {
  components: { TheHeader, MainLayout, CovidPolicyForm },
};
</script>
<style scoped></style>
