<template>
  <div>
    <the-header :page="4"></the-header>
    <main-layout>
      <covid-policy-form></covid-policy-form>
    </main-layout>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import MainLayout from "@/components/MainLayout.vue";
import CovidPolicyForm from "@/components/CovidPolicyForm.vue";
export default {
  components: { TheHeader, MainLayout, CovidPolicyForm },
};
</script>
<style scoped></style>
