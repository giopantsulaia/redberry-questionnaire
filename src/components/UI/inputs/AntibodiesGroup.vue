<template>
  <anti-bodies
    v-model="antibodies.test_date"
    name="antibodies_test_date"
    rules="required"
    input-type="(this.type='date')"
    placeholder="რიცხვი"
  />
</template>
<script>
import AntiBodies from "./AntiBodies.vue";
export default {
  components: { AntiBodies },
};
</script>
