<template>
  <div class="flex items-center text-base ml-4">
    <Field
      type="radio"
      :value="value"
      rules="required"
      name="number_of_days_from_office"
      class="outline-none my-2 px-4 mr-3"
      @click="$emit('update:modelValue', $event.target.value)"
    />{{ value }}
  </div>
</template>
<script>
import { Field } from "vee-validate";
export default {
  components: { Field },
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:modelValue"],
};
</script>
