<template>
  <div class="flex items-center text-lg">
    <Field
      type="radio"
      :name="name"
      :rules="rules"
      :value="value"
      class="outline-none my-3 px-4 mr-3"
      @click="$emit('update:modelValue', $event.target.value)"
    />
    {{ label }}
  </div>
</template>
<script>
import { Field } from "vee-validate";
export default {
  components: {
    Field,
  },
  props: {
    name: { type: String, required: true },
    value: { type: [Boolean, String], required: true },
    rules: { type: String, required: true },
    label: { type: String, required: true },
  },
  emits: ["update:modelValue"],
};
</script>
