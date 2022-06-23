<template>
  <div>
    <the-header :page="1"></the-header>
    <main-layout>
      <user-identification-form></user-identification-form>
    </main-layout>
  </div>
</template>
<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import UserIdentificationForm from "@/components/UI/forms/UserIdentificationForm.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
export default {
  components: { TheHeader, UserIdentificationForm, MainLayout },
};
</script>
<style scoped></style>
