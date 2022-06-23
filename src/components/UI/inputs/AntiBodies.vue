<template>
  <div class="flex flex-col">
    <Field
      type="text"
      :name="name"
      :placeholder="placeholder"
      rules="required"
      :onfocus="inputType"
      class="outline-none border border-gray-600 my-3 px-4 mr-3 h-12"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage class="text-red-600 text-sm" :name="name" />
  </div>
</template>
<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    rules: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
};
</script>
