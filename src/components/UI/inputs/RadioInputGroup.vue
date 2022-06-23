<template>
  <div class="flex flex-col text-lg">
    <div v-for="option in options" :key="option.label">
      <Field
        type="radio"
        :value="option.value"
        :name="option.name"
        rules="required"
        class="outline-none my-3 px-4 mr-3"
        @click="$emit('update:modelValue', $event.target.value)"
      />
      {{ option.label }}
    </div>
  </div>
</template>
<script>
import { Field } from "vee-validate";
export default {
  components: { Field },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>
