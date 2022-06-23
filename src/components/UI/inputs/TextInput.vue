<template>
  <div class="flex flex-col">
    <label :for="name" class="mb-2 font-black">{{ label }}</label>
    <Field
      :type="type"
      :rules="rules"
      placeholder="იოსებ"
      :name="name"
      class="outline-none border border-gray-600 h-12 px-4"
    />
    <ErrorMessage class="text-red-600 text-sm mt-1" :name="name" />
  </div>
</template>
<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: { Field, ErrorMessage },
  props: {
    rules: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>
